using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class AuditoriaConfiguration : IEntityTypeConfiguration<Auditoria>
{
    public void Configure(EntityTypeBuilder<Auditoria> builder)
    {
        builder.ToTable("Auditoria");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Entidade).HasMaxLength(150).IsRequired();
        builder.Property(x => x.RegistroId).HasMaxLength(100).IsRequired();
        builder.Property(x => x.IP).HasMaxLength(50);
        builder.Property(x => x.UserAgent).HasMaxLength(500);
        builder.Property(x => x.ValoresAntesJson).HasColumnType("nvarchar(max)");
        builder.Property(x => x.ValoresDepoisJson).HasColumnType("nvarchar(max)");
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");

        builder.HasIndex(x => new { x.Entidade, x.RegistroId, x.DataHora });

        builder.HasOne(x => x.Usuario)
            .WithMany(x => x.Auditorias)
            .HasForeignKey(x => x.UsuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Paciente)
            .WithMany(x => x.Auditorias)
            .HasForeignKey(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Prontuario)
            .WithMany(x => x.Auditorias)
            .HasForeignKey(x => x.ProntuarioId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
