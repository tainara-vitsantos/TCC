using ClinicaEscolaBase.Enums;
using System;
using System.Collections.Generic;

namespace ClinicaEscolaBase.Models;

public class DocumentoClinico : EntityBase
{
    public int ProntuarioId { get; set; }
    public int PacienteId { get; set; }
    public int? AtendimentoId { get; set; }
    public TipoDocumentoClinico TipoDocumento { get; set; }
    public string CriadoPorUsuarioId { get; set; } = string.Empty;
    public string? SupervisorId { get; set; }
    public StatusDocumentoClinico StatusDocumento { get; set; } = StatusDocumentoClinico.Rascunho;
    public int Versao { get; set; } = 1;
    public DateTime DataDocumento { get; set; } = DateTime.UtcNow;
    public DateTime? FinalizadoEm { get; set; }
    public string? Observacoes { get; set; }
    public bool ExcluidoLogicamente { get; set; }

    public Prontuario Prontuario { get; set; } = null!;
    public Paciente Paciente { get; set; } = null!;
    public Atendimento? Atendimento { get; set; }
    public ApplicationUser CriadoPorUsuario { get; set; } = null!;
    public ApplicationUser? Supervisor { get; set; }
    public DocumentoIdentificacaoPaciente? DocumentoIdentificacaoPaciente { get; set; }
    public AnamneseAdulto? AnamneseAdulto { get; set; }
    public AnamneseAdolescente? AnamneseAdolescente { get; set; }
    public PlantaoPsicologico? PlantaoPsicologico { get; set; }
    public TermoPsicoterapiaIndividual? TermoPsicoterapiaIndividual { get; set; }
    public TermoAutorizacaoMenor? TermoAutorizacaoMenor { get; set; }
    public TermoCompromissoInformatizacao? TermoCompromissoInformatizacao { get; set; }
    public ICollection<EvolucaoAtendimento> Evolucoes { get; set; } = new List<EvolucaoAtendimento>();
    public ICollection<Anexo> Anexos { get; set; } = new List<Anexo>();
}
