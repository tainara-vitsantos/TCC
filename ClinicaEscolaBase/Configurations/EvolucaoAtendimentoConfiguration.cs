using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class EvolucaoAtendimentoConfiguration : IEntityTypeConfiguration<EvolucaoAtendimento>
{
    public void Configure(EntityTypeBuilder<EvolucaoAtendimento> builder)
    {
        builder.ToTable("EvolucoesAtendimento");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.TextoEvolucao).HasColumnType("nvarchar(max)").IsRequired();

        builder.HasOne(x => x.DocumentoClinico)
            .WithMany(x => x.Evolucoes)
            .HasForeignKey(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Atendimento)
            .WithMany(x => x.Evolucoes)
            .HasForeignKey(x => x.AtendimentoId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.CriadoPorUsuario)
            .WithMany(x => x.EvolucoesCriadas)
            .HasForeignKey(x => x.CriadoPorUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Supervisor)
            .WithMany(x => x.EvolucoesSupervisionadas)
            .HasForeignKey(x => x.SupervisorId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
