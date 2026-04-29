using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class TermoResponsabilidadeEstagiarioConfiguration : IEntityTypeConfiguration<TermoResponsabilidadeEstagiario>
{
    public void Configure(EntityTypeBuilder<TermoResponsabilidadeEstagiario> builder)
    {
        builder.ToTable("TermosResponsabilidadeEstagiario");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.MatriculaInformada).HasMaxLength(50);
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");

        builder.HasOne(x => x.EstagiarioUsuario)
            .WithMany(x => x.TermosResponsabilidade)
            .HasForeignKey(x => x.EstagiarioUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
