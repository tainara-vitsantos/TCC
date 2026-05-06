using ClinicaEscolaBase.Data;
using ClinicaEscolaBase.Enums;
using ClinicaEscolaBase.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace ClinicaEscolaBase.Controllers;

public class AtendimentoController : Controller
{
    private readonly ApplicationDbContext _context;

    public AtendimentoController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        var atendimentos = await _context.Atendimentos
            .Include(x => x.Paciente)
            .Include(x => x.Prontuario)
            .AsNoTracking()
            .OrderByDescending(x => x.DataHoraInicio)
            .ToListAsync();

        return View(atendimentos);
    }

    public async Task<IActionResult> Details(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var atendimento = await _context.Atendimentos
            .Include(x => x.Paciente)
            .Include(x => x.Prontuario)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id.Value);

        if (atendimento == null)
        {
            return NotFound();
        }

        return View(atendimento);
    }

    public async Task<IActionResult> Create(Guid pacienteId)
    {
        var paciente = await _context.Pacientes
            .Include(x => x.Prontuario)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == pacienteId);

        if (paciente == null)
        {
            return NotFound();
        }

        if (paciente.Prontuario == null)
        {
            TempData["Warning"] = "O paciente ainda não possui prontuário cadastrado.";
            return RedirectToAction("Details", "Paciente", new { id = pacienteId });
        }

        ViewBag.PacienteNome = paciente.NomeCompleto;
        ViewBag.ProntuarioNumero = paciente.Prontuario.NumeroProntuario;

        var atendimento = new Atendimento
        {
            PacienteId = pacienteId,
            ProntuarioId = paciente.Prontuario.Id,
            DataHoraInicio = DateTime.Now,
            StatusAtendimento = StatusAtendimento.Agendado
        };

        PopulateEnums();
        return View(atendimento);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("PacienteId,ProntuarioId,TipoAtendimento,DataHoraInicio,DataHoraFim,StatusAtendimento,Observacoes")] Atendimento atendimento)
    {
        await LoadPatientInfoAsync(atendimento.PacienteId, atendimento.ProntuarioId);

        if (!await ValidateForeignKeysAsync(atendimento))
        {
            PopulateEnums();
            return View(atendimento);
        }

        if (!ModelState.IsValid)
        {
            PopulateEnums();
            return View(atendimento);
        }

        _context.Add(atendimento);
        await _context.SaveChangesAsync();

        return RedirectToAction("Details", "Paciente", new { id = atendimento.PacienteId });
    }

    public async Task<IActionResult> Edit(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var atendimento = await _context.Atendimentos.FindAsync(id.Value);
        if (atendimento == null)
        {
            return NotFound();
        }

        PopulateEnums();
        return View(atendimento);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int id, [Bind("Id,PacienteId,ProntuarioId,TipoAtendimento,DataHoraInicio,DataHoraFim,StatusAtendimento,Observacoes")] Atendimento atendimento)
    {
        if (id != atendimento.Id)
        {
            return BadRequest();
        }

        if (!await ValidateForeignKeysAsync(atendimento))
        {
            PopulateEnums();
            return View(atendimento);
        }

        if (!ModelState.IsValid)
        {
            PopulateEnums();
            return View(atendimento);
        }

        try
        {
            _context.Update(atendimento);
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AtendimentoExists(atendimento.Id))
            {
                return NotFound();
            }
            throw;
        }

        return RedirectToAction("Details", "Paciente", new { id = atendimento.PacienteId });
    }

    public async Task<IActionResult> Delete(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        var atendimento = await _context.Atendimentos
            .Include(x => x.Paciente)
            .Include(x => x.Prontuario)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id.Value);

        if (atendimento == null)
        {
            return NotFound();
        }

        return View(atendimento);
    }

    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int id)
    {
        var atendimento = await _context.Atendimentos.FindAsync(id);
        if (atendimento != null)
        {
            var pacienteId = atendimento.PacienteId;
            _context.Atendimentos.Remove(atendimento);
            await _context.SaveChangesAsync();
            return RedirectToAction("Details", "Paciente", new { id = pacienteId });
        }

        return RedirectToAction(nameof(Index));
    }

    private void PopulateEnums()
    {
        ViewData["TipoAtendimento"] = new SelectList(Enum.GetValues(typeof(TipoAtendimento)));
        ViewData["StatusAtendimento"] = new SelectList(Enum.GetValues(typeof(StatusAtendimento)));
    }

    private async Task<bool> LoadPatientInfoAsync(Guid pacienteId, int prontuarioId)
    {
        var paciente = await _context.Pacientes
            .Include(x => x.Prontuario)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == pacienteId);

        if (paciente == null)
        {
            ViewBag.PacienteNome = string.Empty;
            ViewBag.ProntuarioNumero = string.Empty;
            return false;
        }

        ViewBag.PacienteNome = paciente.NomeCompleto;
        ViewBag.ProntuarioNumero = paciente.Prontuario?.NumeroProntuario ?? string.Empty;
        return true;
    }

    private async Task<bool> ValidateForeignKeysAsync(Atendimento atendimento)
    {
        var pacienteExists = await _context.Pacientes.AnyAsync(x => x.Id == atendimento.PacienteId);
        if (!pacienteExists)
        {
            ModelState.AddModelError(nameof(atendimento.PacienteId), "Paciente inválido.");
        }

        var prontuarioExists = await _context.Prontuarios.AnyAsync(x => x.Id == atendimento.ProntuarioId && x.PacienteId == atendimento.PacienteId);
        if (!prontuarioExists)
        {
            ModelState.AddModelError(nameof(atendimento.ProntuarioId), "Prontuário inválido ou não pertence ao paciente selecionado.");
        }

        return ModelState.IsValid;
    }

    private bool AtendimentoExists(int id)
    {
        return _context.Atendimentos.Any(x => x.Id == id);
    }
}
