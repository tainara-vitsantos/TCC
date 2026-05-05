using ClinicaEscolaBase.Enums;
using System;
using System.Collections.Generic;

namespace ClinicaEscolaBase.Models;

public class Atendimento : EntityBase
{
    public int ProntuarioId { get; set; }
    public Guid PacienteId { get; set; }
    public string AlunoId { get; set; } = string.Empty;
    public string? SupervisorId { get; set; }
    public TipoAtendimento TipoAtendimento { get; set; }
    public DateTime DataHoraInicio { get; set; }
    public DateTime? DataHoraFim { get; set; }
    public StatusAtendimento StatusAtendimento { get; set; } = StatusAtendimento.Agendado;
    public bool FaltaJustificada { get; set; }
    public string? Observacoes { get; set; }

    public Prontuario Prontuario { get; set; } = null!;
    public Paciente Paciente { get; set; } = null!;
    public ApplicationUser Aluno { get; set; } = null!;
    public ApplicationUser? Supervisor { get; set; }
    public ICollection<DocumentoClinico> DocumentosClinicos { get; set; } = new List<DocumentoClinico>();
    public ICollection<EvolucaoAtendimento> Evolucoes { get; set; } = new List<EvolucaoAtendimento>();
}
