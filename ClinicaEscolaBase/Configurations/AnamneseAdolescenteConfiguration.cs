using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class AnamneseAdolescenteConfiguration : IEntityTypeConfiguration<AnamneseAdolescente>
{
    public void Configure(EntityTypeBuilder<AnamneseAdolescente> builder)
    {
        builder.ToTable("AnamnesesAdolescente");
        builder.HasKey(x => x.DocumentoClinicoId);

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.AnamneseAdolescente)
            .HasForeignKey<AnamneseAdolescente>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
