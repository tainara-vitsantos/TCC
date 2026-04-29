using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class VinculoAlunoPacienteConfiguration : IEntityTypeConfiguration<VinculoAlunoPaciente>
{
    public void Configure(EntityTypeBuilder<VinculoAlunoPaciente> builder)
    {
        builder.ToTable("VinculosAlunoPaciente");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");

        builder.HasIndex(x => new { x.PacienteId, x.AlunoId, x.StatusVinculo })
            .IsUnique()
            .HasFilter("[StatusVinculo] = 1");

        builder.HasOne(x => x.Paciente)
            .WithMany(x => x.VinculosAluno)
            .HasForeignKey(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Aluno)
            .WithMany(x => x.VinculosComoAluno)
            .HasForeignKey(x => x.AlunoId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.LiberadoPorUsuario)
            .WithMany(x => x.VinculosLiberados)
            .HasForeignKey(x => x.LiberadoPorUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.RevogadoPorUsuario)
            .WithMany(x => x.VinculosRevogados)
            .HasForeignKey(x => x.RevogadoPorUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
