using ClinicaEscolaBase.Enums;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ClinicaEscolaBase.Models;

public class ApplicationUser : IdentityUser
{
    public string NomeCompleto { get; set; } = string.Empty;
    public string? Cpf { get; set; }
    public string? Matricula { get; set; }
    public string? Crp { get; set; }
    public TipoUsuario TipoUsuario { get; set; }
    public bool Ativo { get; set; } = true;

    public ICollection<VinculoAlunoPaciente> VinculosComoAluno { get; set; } = new List<VinculoAlunoPaciente>();
    public ICollection<VinculoAlunoPaciente> VinculosLiberados { get; set; } = new List<VinculoAlunoPaciente>();
    public ICollection<VinculoAlunoPaciente> VinculosRevogados { get; set; } = new List<VinculoAlunoPaciente>();
    public ICollection<Atendimento> AtendimentosComoAluno { get; set; } = new List<Atendimento>();
    public ICollection<Atendimento> AtendimentosComoSupervisor { get; set; } = new List<Atendimento>();
    public ICollection<DocumentoClinico> DocumentosCriados { get; set; } = new List<DocumentoClinico>();
    public ICollection<DocumentoClinico> DocumentosSupervisionados { get; set; } = new List<DocumentoClinico>();
    public ICollection<EvolucaoAtendimento> EvolucoesCriadas { get; set; } = new List<EvolucaoAtendimento>();
    public ICollection<EvolucaoAtendimento> EvolucoesSupervisionadas { get; set; } = new List<EvolucaoAtendimento>();
    public ICollection<TermoResponsabilidadeEstagiario> TermosResponsabilidade { get; set; } = new List<TermoResponsabilidadeEstagiario>();
    public ICollection<Anexo> AnexosEnviados { get; set; } = new List<Anexo>();
    public ICollection<Auditoria> Auditorias { get; set; } = new List<Auditoria>();
}
