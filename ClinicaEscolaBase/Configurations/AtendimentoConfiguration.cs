using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class AtendimentoConfiguration : IEntityTypeConfiguration<Atendimento>
{
    public void Configure(EntityTypeBuilder<Atendimento> builder)
    {
        builder.ToTable("Atendimentos");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");
        builder.HasIndex(x => new { x.PacienteId, x.DataHoraInicio });

        builder.HasOne(x => x.Prontuario)
            .WithMany(x => x.Atendimentos)
            .HasForeignKey(x => x.ProntuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Paciente)
            .WithMany(x => x.Atendimentos)
            .HasForeignKey(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Aluno)
            .WithMany(x => x.AtendimentosComoAluno)
            .HasForeignKey(x => x.AlunoId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Supervisor)
            .WithMany(x => x.AtendimentosComoSupervisor)
            .HasForeignKey(x => x.SupervisorId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
