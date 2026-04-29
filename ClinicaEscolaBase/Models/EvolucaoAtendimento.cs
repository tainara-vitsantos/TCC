using System;

namespace ClinicaEscolaBase.Models;

public class EvolucaoAtendimento : EntityBase
{
    public int DocumentoClinicoId { get; set; }
    public int? AtendimentoId { get; set; }
    public DateTime DataEvolucao { get; set; } = DateTime.UtcNow;
    public string TextoEvolucao { get; set; } = string.Empty;
    public string CriadoPorUsuarioId { get; set; } = string.Empty;
    public string? SupervisorId { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
    public Atendimento? Atendimento { get; set; }
    public ApplicationUser CriadoPorUsuario { get; set; } = null!;
    public ApplicationUser? Supervisor { get; set; }
}
