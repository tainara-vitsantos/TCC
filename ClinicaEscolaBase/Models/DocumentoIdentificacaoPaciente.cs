using System;

namespace ClinicaEscolaBase.Models;

public class DocumentoIdentificacaoPaciente
{
    public int DocumentoClinicoId { get; set; }
    public string? NumeroProntuarioInformado { get; set; }
    public DateTime? DataPrimeiraConsulta { get; set; }
    public string? NomePacienteNoFormulario { get; set; }
    public DateTime? DataNascimentoNoFormulario { get; set; }
    public string? SexoNoFormulario { get; set; }
    public int? IdadeInformada { get; set; }
    public string? ProfissaoNoFormulario { get; set; }
    public string? NaturalidadeNoFormulario { get; set; }
    public string? EstadoNoFormulario { get; set; }
    public string? EscolaridadeNoFormulario { get; set; }
    public string? RGNoFormulario { get; set; }
    public string? CPFNoFormulario { get; set; }
    public string? EstadoCivilNoFormulario { get; set; }
    public string? EnderecoNoFormulario { get; set; }
    public string? BairroNoFormulario { get; set; }
    public string? CidadeNoFormulario { get; set; }
    public string? CEPNoFormulario { get; set; }
    public string? TelefoneNoFormulario { get; set; }
    public string? TelefoneRecadoNoFormulario { get; set; }
    public string? ReligiaoNoFormulario { get; set; }
    public string? NomePaiNoFormulario { get; set; }
    public string? NomeMaeNoFormulario { get; set; }
    public string? ResponsavelNoFormulario { get; set; }
    public string? GrauParentescoResponsavel { get; set; }
    public string? Observacoes { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
}
