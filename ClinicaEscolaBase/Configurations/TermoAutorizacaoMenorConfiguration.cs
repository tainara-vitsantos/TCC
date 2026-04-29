using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class TermoAutorizacaoMenorConfiguration : IEntityTypeConfiguration<TermoAutorizacaoMenor>
{
    public void Configure(EntityTypeBuilder<TermoAutorizacaoMenor> builder)
    {
        builder.ToTable("TermosAutorizacaoMenor");
        builder.HasKey(x => x.DocumentoClinicoId);

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.TermoAutorizacaoMenor)
            .HasForeignKey<TermoAutorizacaoMenor>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.ResponsavelLegal)
            .WithMany(x => x.TermosAutorizacaoMenor)
            .HasForeignKey(x => x.ResponsavelLegalId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
