using ClinicaEscolaBase.Enums;
using System;

namespace ClinicaEscolaBase.Models;

public class Auditoria : EntityBase
{
    public string UsuarioId { get; set; } = string.Empty;
    public TipoAcaoAuditoria TipoAcao { get; set; }
    public string Entidade { get; set; } = string.Empty;
    public string RegistroId { get; set; } = string.Empty;
    public int? PacienteId { get; set; }
    public int? ProntuarioId { get; set; }
    public DateTime DataHora { get; set; } = DateTime.UtcNow;
    public string? IP { get; set; }
    public string? UserAgent { get; set; }
    public string? ValoresAntesJson { get; set; }
    public string? ValoresDepoisJson { get; set; }
    public string? Observacoes { get; set; }

    public ApplicationUser Usuario { get; set; } = null!;
    public Paciente? Paciente { get; set; }
    public Prontuario? Prontuario { get; set; }
}
