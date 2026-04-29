using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class ResponsavelLegalConfiguration : IEntityTypeConfiguration<ResponsavelLegal>
{
    public void Configure(EntityTypeBuilder<ResponsavelLegal> builder)
    {
        builder.ToTable("ResponsaveisLegais");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.NomeCompleto).HasMaxLength(200).IsRequired();
        builder.Property(x => x.RG).HasMaxLength(30);
        builder.Property(x => x.CPF).HasMaxLength(14);
        builder.Property(x => x.GrauParentesco).HasMaxLength(100);
        builder.Property(x => x.Telefone).HasMaxLength(30);
        builder.Property(x => x.Email).HasMaxLength(150);
        builder.Property(x => x.Endereco).HasMaxLength(300);

        builder.HasOne(x => x.Paciente)
            .WithMany(x => x.ResponsaveisLegais)
            .HasForeignKey(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
