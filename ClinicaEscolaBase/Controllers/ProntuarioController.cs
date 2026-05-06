using ClinicaEscolaBase.Data;
using ClinicaEscolaBase.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace ClinicaEscolaBase.Controllers;

public class ProntuarioController : Controller
{
    private readonly ApplicationDbContext _context;

    public ProntuarioController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        var prontuarios = await _context.Prontuarios
            .Include(x => x.Paciente)
            .AsNoTracking()
            .OrderBy(x => x.NumeroProntuario)
            .ToListAsync();

        return View(prontuarios);
    }

    public async Task<IActionResult> Details(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var prontuario = await _context.Prontuarios
            .Include(x => x.Paciente)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id.Value);

        if (prontuario == null)
        {
            return NotFound();
        }

        return View(prontuario);
    }

    public async Task<IActionResult> Create()
    {
        await PopulatePacientesDropDownList();
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(Prontuario prontuario)
    {
        if (!ModelState.IsValid)
        {
            await PopulatePacientesDropDownList(prontuario.PacienteId);
            return View(prontuario);
        }

        _context.Add(prontuario);
        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var prontuario = await _context.Prontuarios.FindAsync(id.Value);
        if (prontuario == null)
        {
            return NotFound();
        }

        await PopulatePacientesDropDownList(prontuario.PacienteId, includeCurrent: true);
        return View(prontuario);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int id, Prontuario prontuario)
    {
        if (id != prontuario.Id)
        {
            return BadRequest();
        }

        if (!ModelState.IsValid)
        {
            await PopulatePacientesDropDownList(prontuario.PacienteId, includeCurrent: true);
            return View(prontuario);
        }

        try
        {
            _context.Update(prontuario);
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProntuarioExists(prontuario.Id))
            {
                return NotFound();
            }
            throw;
        }

        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Delete(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var prontuario = await _context.Prontuarios
            .Include(x => x.Paciente)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id.Value);

        if (prontuario == null)
        {
            return NotFound();
        }

        return View(prontuario);
    }

    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int id)
    {
        var prontuario = await _context.Prontuarios.FindAsync(id);
        if (prontuario != null)
        {
            _context.Prontuarios.Remove(prontuario);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Index));
    }

    private async Task PopulatePacientesDropDownList(Guid? selectedPacienteId = null, bool includeCurrent = false)
    {
        var pacientesQuery = _context.Pacientes.AsNoTracking();

        if (!includeCurrent)
        {
            pacientesQuery = pacientesQuery.Where(p => !_context.Prontuarios.Any(pr => pr.PacienteId == p.Id));
        }
        else if (selectedPacienteId.HasValue)
        {
            pacientesQuery = pacientesQuery.Where(p => !_context.Prontuarios.Any(pr => pr.PacienteId == p.Id) || p.Id == selectedPacienteId.Value);
        }

        var pacientes = await pacientesQuery
            .OrderBy(p => p.NomeCompleto)
            .ToListAsync();

        ViewData["PacienteId"] = new SelectList(pacientes, "Id", "NomeCompleto", selectedPacienteId);
    }

    private bool ProntuarioExists(int id)
    {
        return _context.Prontuarios.Any(x => x.Id == id);
    }
}
