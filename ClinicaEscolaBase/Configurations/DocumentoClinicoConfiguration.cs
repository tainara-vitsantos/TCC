using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class DocumentoClinicoConfiguration : IEntityTypeConfiguration<DocumentoClinico>
{
    public void Configure(EntityTypeBuilder<DocumentoClinico> builder)
    {
        builder.ToTable("DocumentosClinicos");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");
        builder.HasIndex(x => new { x.PacienteId, x.TipoDocumento, x.DataDocumento });

        builder.HasOne(x => x.Prontuario)
            .WithMany(x => x.DocumentosClinicos)
            .HasForeignKey(x => x.ProntuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Paciente)
            .WithMany(x => x.DocumentosClinicos)
            .HasForeignKey(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Atendimento)
            .WithMany(x => x.DocumentosClinicos)
            .HasForeignKey(x => x.AtendimentoId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.CriadoPorUsuario)
            .WithMany(x => x.DocumentosCriados)
            .HasForeignKey(x => x.CriadoPorUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Supervisor)
            .WithMany(x => x.DocumentosSupervisionados)
            .HasForeignKey(x => x.SupervisorId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
