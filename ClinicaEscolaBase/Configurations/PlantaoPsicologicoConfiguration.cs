using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class PlantaoPsicologicoConfiguration : IEntityTypeConfiguration<PlantaoPsicologico>
{
    public void Configure(EntityTypeBuilder<PlantaoPsicologico> builder)
    {
        builder.ToTable("PlantoesPsicologicos");
        builder.HasKey(x => x.DocumentoClinicoId);

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.PlantaoPsicologico)
            .HasForeignKey<PlantaoPsicologico>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
