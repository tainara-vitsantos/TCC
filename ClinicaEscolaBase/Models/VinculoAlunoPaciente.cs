using ClinicaEscolaBase.Enums;
using System;

namespace ClinicaEscolaBase.Models;

public class VinculoAlunoPaciente : EntityBase
{
    public Guid PacienteId { get; set; }
    public string AlunoId { get; set; } = string.Empty;
    public string LiberadoPorUsuarioId { get; set; } = string.Empty;
    public DateTime DataLiberacao { get; set; }
    public string? RevogadoPorUsuarioId { get; set; }
    public DateTime? DataRevogacao { get; set; }
    public StatusVinculo StatusVinculo { get; set; } = StatusVinculo.Ativo;
    public string? Observacoes { get; set; }
    public bool PermiteLeitura { get; set; } = true;
    public bool PermiteEscrita { get; set; } = true;

    public Paciente Paciente { get; set; } = null!;
    public ApplicationUser Aluno { get; set; } = null!;
    public ApplicationUser LiberadoPorUsuario { get; set; } = null!;
    public ApplicationUser? RevogadoPorUsuario { get; set; }
}
