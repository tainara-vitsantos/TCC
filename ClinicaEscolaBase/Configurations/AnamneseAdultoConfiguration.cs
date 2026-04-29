using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class AnamneseAdultoConfiguration : IEntityTypeConfiguration<AnamneseAdulto>
{
    public void Configure(EntityTypeBuilder<AnamneseAdulto> builder)
    {
        builder.ToTable("AnamnesesAdulto");
        builder.HasKey(x => x.DocumentoClinicoId);

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.AnamneseAdulto)
            .HasForeignKey<AnamneseAdulto>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
