using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class ProntuarioConfiguration : IEntityTypeConfiguration<Prontuario>
{
    public void Configure(EntityTypeBuilder<Prontuario> builder)
    {
        builder.ToTable("Prontuarios");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.NumeroProntuario).HasMaxLength(50).IsRequired();
        builder.Property(x => x.ObservacoesGerais).HasColumnType("nvarchar(max)");

        builder.HasIndex(x => x.NumeroProntuario).IsUnique();
        builder.HasIndex(x => x.PacienteId).IsUnique();

        builder.HasOne(x => x.Paciente)
            .WithOne(x => x.Prontuario)
            .HasForeignKey<Prontuario>(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
