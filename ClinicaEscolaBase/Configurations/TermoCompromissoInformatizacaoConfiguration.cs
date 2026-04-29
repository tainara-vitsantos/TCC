using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class TermoCompromissoInformatizacaoConfiguration : IEntityTypeConfiguration<TermoCompromissoInformatizacao>
{
    public void Configure(EntityTypeBuilder<TermoCompromissoInformatizacao> builder)
    {
        builder.ToTable("TermosCompromissoInformatizacao");
        builder.HasKey(x => x.DocumentoClinicoId);

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.TermoCompromissoInformatizacao)
            .HasForeignKey<TermoCompromissoInformatizacao>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.EstagiarioUsuario)
            .WithMany()
            .HasForeignKey(x => x.EstagiarioUsuarioId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Paciente)
            .WithMany()
            .HasForeignKey(x => x.PacienteId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
