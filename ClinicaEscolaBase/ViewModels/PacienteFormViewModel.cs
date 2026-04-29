using System;
using System.ComponentModel.DataAnnotations;

namespace ClinicaEscolaBase.ViewModels;

public class PacienteFormViewModel
{
    public int? Id { get; set; }

    [Required]
    [StringLength(200)]
    public string NomeCompleto { get; set; } = string.Empty;

    [DataType(DataType.Date)]
    public DateTime? DataNascimento { get; set; }

    [StringLength(30)]
    public string? Sexo { get; set; }

    [StringLength(100)]
    public string? Naturalidade { get; set; }

    [StringLength(50)]
    public string? EstadoNascimento { get; set; }

    [StringLength(100)]
    public string? Escolaridade { get; set; }

    [StringLength(100)]
    public string? Profissao { get; set; }

    [StringLength(30)]
    public string? RG { get; set; }

    [StringLength(14)]
    public string? CPF { get; set; }

    [StringLength(50)]
    public string? EstadoCivil { get; set; }

    [StringLength(100)]
    public string? Religiao { get; set; }

    [StringLength(200)]
    public string? EnderecoLogradouro { get; set; }

    [StringLength(20)]
    public string? EnderecoNumero { get; set; }

    [StringLength(100)]
    public string? Bairro { get; set; }

    [StringLength(100)]
    public string? Cidade { get; set; }

    [StringLength(20)]
    public string? CEP { get; set; }

    [StringLength(30)]
    public string? Telefone { get; set; }

    [StringLength(30)]
    public string? TelefoneRecado { get; set; }

    [StringLength(200)]
    public string? NomePai { get; set; }

    [StringLength(200)]
    public string? NomeMae { get; set; }

    public string? Observacoes { get; set; }
}
