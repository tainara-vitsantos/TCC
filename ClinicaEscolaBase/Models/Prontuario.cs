using ClinicaEscolaBase.Enums;
using System;
using System.Collections.Generic;

namespace ClinicaEscolaBase.Models;

public class Prontuario : EntityBase
{
    public int PacienteId { get; set; }
    public string NumeroProntuario { get; set; } = string.Empty;
    public DateTime? DataPrimeiraConsulta { get; set; }
    public SituacaoProntuario SituacaoProntuario { get; set; } = SituacaoProntuario.Ativo;
    public string? ObservacoesGerais { get; set; }

    public Paciente Paciente { get; set; } = null!;
    public ICollection<Atendimento> Atendimentos { get; set; } = new List<Atendimento>();
    public ICollection<DocumentoClinico> DocumentosClinicos { get; set; } = new List<DocumentoClinico>();
    public ICollection<Auditoria> Auditorias { get; set; } = new List<Auditoria>();
}
