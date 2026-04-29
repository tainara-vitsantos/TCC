using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class DocumentoIdentificacaoPacienteConfiguration : IEntityTypeConfiguration<DocumentoIdentificacaoPaciente>
{
    public void Configure(EntityTypeBuilder<DocumentoIdentificacaoPaciente> builder)
    {
        builder.ToTable("DocumentosIdentificacaoPaciente");
        builder.HasKey(x => x.DocumentoClinicoId);
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.DocumentoIdentificacaoPaciente)
            .HasForeignKey<DocumentoIdentificacaoPaciente>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
