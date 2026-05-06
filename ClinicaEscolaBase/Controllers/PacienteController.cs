using ClinicaEscolaBase.Data;
using ClinicaEscolaBase.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicaEscolaBase.Controllers;

public class PacienteController : Controller
{
    private readonly ApplicationDbContext _context;

    public PacienteController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        var pacientes = await _context.Pacientes
            .AsNoTracking()
            .OrderBy(x => x.NomeCompleto)
            .ToListAsync();

        return View(pacientes);
    }

    public async Task<IActionResult> Details(Guid? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var paciente = await _context.Pacientes
            .Include(x => x.Prontuario)
            .Include(x => x.Atendimentos)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id.Value);

        if (paciente == null)
        {
            return NotFound();
        }

        return View(paciente);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(Paciente paciente)
    {
        if (!ModelState.IsValid)
        {
            return View(paciente);
        }

        paciente.Id = Guid.NewGuid();
        _context.Add(paciente);
        await _context.SaveChangesAsync();

        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(Guid? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var paciente = await _context.Pacientes.FindAsync(id.Value);
        if (paciente == null)
        {
            return NotFound();
        }

        return View(paciente);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(Guid id, Paciente paciente)
    {
        if (id != paciente.Id)
        {
            return BadRequest();
        }

        if (!ModelState.IsValid)
        {
            return View(paciente);
        }

        try
        {
            _context.Update(paciente);
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PacienteExists(paciente.Id))
            {
                return NotFound();
            }
            throw;
        }

        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Delete(Guid? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var paciente = await _context.Pacientes
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id.Value);

        if (paciente == null)
        {
            return NotFound();
        }

        return View(paciente);
    }

    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(Guid id)
    {
        var paciente = await _context.Pacientes.FindAsync(id);
        if (paciente != null)
        {
            _context.Pacientes.Remove(paciente);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Index));
    }

    private bool PacienteExists(Guid id)
    {
        return _context.Pacientes.Any(x => x.Id == id);
    }
}
