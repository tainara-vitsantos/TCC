using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class TermoPsicoterapiaIndividualConfiguration : IEntityTypeConfiguration<TermoPsicoterapiaIndividual>
{
    public void Configure(EntityTypeBuilder<TermoPsicoterapiaIndividual> builder)
    {
        builder.ToTable("TermosPsicoterapiaIndividual");
        builder.HasKey(x => x.DocumentoClinicoId);

        builder.HasOne(x => x.DocumentoClinico)
            .WithOne(x => x.TermoPsicoterapiaIndividual)
            .HasForeignKey<TermoPsicoterapiaIndividual>(x => x.DocumentoClinicoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
