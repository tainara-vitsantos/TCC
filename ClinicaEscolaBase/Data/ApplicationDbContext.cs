using ClinicaEscolaBase.Configurations;
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

        builder.ApplyConfiguration(new ApplicationUserConfiguration());
        builder.ApplyConfiguration(new PacienteConfiguration());
        builder.ApplyConfiguration(new ProntuarioConfiguration());
        builder.ApplyConfiguration(new TratamentoAnteriorPacienteConfiguration());
        builder.ApplyConfiguration(new ResponsavelLegalConfiguration());
        builder.ApplyConfiguration(new VinculoAlunoPacienteConfiguration());
        builder.ApplyConfiguration(new AtendimentoConfiguration());
        builder.ApplyConfiguration(new DocumentoClinicoConfiguration());
        builder.ApplyConfiguration(new DocumentoIdentificacaoPacienteConfiguration());
        builder.ApplyConfiguration(new AnamneseAdultoConfiguration());
        builder.ApplyConfiguration(new AnamneseAdolescenteConfiguration());
        builder.ApplyConfiguration(new PlantaoPsicologicoConfiguration());
        builder.ApplyConfiguration(new EvolucaoAtendimentoConfiguration());
        builder.ApplyConfiguration(new TermoPsicoterapiaIndividualConfiguration());
        builder.ApplyConfiguration(new TermoAutorizacaoMenorConfiguration());
        builder.ApplyConfiguration(new TermoCompromissoInformatizacaoConfiguration());
        builder.ApplyConfiguration(new TermoResponsabilidadeEstagiarioConfiguration());
        builder.ApplyConfiguration(new AnexoConfiguration());
        builder.ApplyConfiguration(new AuditoriaConfiguration());
    }
}
