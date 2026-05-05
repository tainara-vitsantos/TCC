using ClinicaEscolaBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ClinicaEscolaBase.Configurations;

public class PacienteConfiguration : IEntityTypeConfiguration<Paciente>
{
    public void Configure(EntityTypeBuilder<Paciente> builder)
    {
        builder.ToTable("Pacientes");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedNever();
        builder.Property(x => x.NomeCompleto).HasMaxLength(200).IsRequired();
        builder.Property(x => x.Sexo).HasMaxLength(30);
        builder.Property(x => x.Naturalidade).HasMaxLength(100);
        builder.Property(x => x.EstadoNascimento).HasMaxLength(50);
        builder.Property(x => x.Escolaridade).HasMaxLength(100);
        builder.Property(x => x.Profissao).HasMaxLength(100);
        builder.Property(x => x.RG).HasMaxLength(30);
        builder.Property(x => x.CPF).HasMaxLength(14);
        builder.Property(x => x.EstadoCivil).HasMaxLength(50);
        builder.Property(x => x.Religiao).HasMaxLength(100);
        builder.Property(x => x.EnderecoLogradouro).HasMaxLength(200);
        builder.Property(x => x.EnderecoNumero).HasMaxLength(20);
        builder.Property(x => x.Bairro).HasMaxLength(100);
        builder.Property(x => x.Cidade).HasMaxLength(100);
        builder.Property(x => x.CEP).HasMaxLength(20);
        builder.Property(x => x.Telefone).HasMaxLength(30);
        builder.Property(x => x.TelefoneRecado).HasMaxLength(30);
        builder.Property(x => x.NomePai).HasMaxLength(200);
        builder.Property(x => x.NomeMae).HasMaxLength(200);
        builder.Property(x => x.Observacoes).HasColumnType("nvarchar(max)");

        builder.HasIndex(x => x.NomeCompleto);
        builder.HasIndex(x => x.CPF);
    }
}
