using ClinicaEscolaBase.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ClinicaEscolaBase.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Paciente> Pacientes => Set<Paciente>();
    public DbSet<Prontuario> Prontuarios => Set<Prontuario>();
    public DbSet<TratamentoAnteriorPaciente> TratamentosAnterioresPaciente => Set<TratamentoAnteriorPaciente>();
    public DbSet<ResponsavelLegal> ResponsaveisLegais => Set<ResponsavelLegal>();
    public DbSet<VinculoAlunoPaciente> VinculosAlunoPaciente => Set<VinculoAlunoPaciente>();
    public DbSet<Atendimento> Atendimentos => Set<Atendimento>();
    public DbSet<DocumentoClinico> DocumentosClinicos => Set<DocumentoClinico>();
    public DbSet<DocumentoIdentificacaoPaciente> DocumentosIdentificacaoPaciente => Set<DocumentoIdentificacaoPaciente>();
    public DbSet<AnamneseAdulto> AnamnesesAdulto => Set<AnamneseAdulto>();
    public DbSet<AnamneseAdolescente> AnamnesesAdolescente => Set<AnamneseAdolescente>();
    public DbSet<PlantaoPsicologico> PlantaoPsicologico => Set<PlantaoPsicologico>();
    public DbSet<EvolucaoAtendimento> EvolucoesAtendimento => Set<EvolucaoAtendimento>();
    public DbSet<TermoPsicoterapiaIndividual> TermosPsicoterapiaIndividual => Set<TermoPsicoterapiaIndividual>();
    public DbSet<TermoAutorizacaoMenor> TermosAutorizacaoMenor => Set<TermoAutorizacaoMenor>();
    public DbSet<TermoCompromissoInformatizacao> TermosCompromissoInformatizacao => Set<TermoCompromissoInformatizacao>();
    public DbSet<TermoResponsabilidadeEstagiario> TermosResponsabilidadeEstagiario => Set<TermoResponsabilidadeEstagiario>();
    public DbSet<Anexo> Anexos => Set<Anexo>();
    public DbSet<Auditoria> Auditorias => Set<Auditoria>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // 🔥 aplica TODAS as configurações automaticamente
        builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }
}