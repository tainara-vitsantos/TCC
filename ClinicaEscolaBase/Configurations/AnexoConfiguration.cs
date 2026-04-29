using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class AnexoConfiguration : IEntityTypeConfiguration<Anexo>
{
    public void Configure(EntityTypeBuilder<Anexo> builder)
    {
        builder.ToTable("Anexos");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.NomeOriginal).HasMaxLength(255).IsRequired();
        builder.Property(x => x.NomeArmazenado).HasMaxLength(255).IsRequired();
        builder.Property(x => x.Extensao).HasMaxLength(20);
        builder.Property(x => x.MimeType).HasMaxLength(100);
        builder.Property(x => x.CaminhoArquivo).HasMaxLength(500).IsRequired();
        builder.Property(x => x.HashArquivo).HasMaxLength(256);

        builder.HasOne(x => x.DocumentoClinico)
            .WithMany(x => x.Anexos)
            .HasForeignKey(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.EnviadoPorUsuario)
            .WithMany(x => x.AnexosEnviados)
            .HasForeignKey(x => x.EnviadoPorUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
