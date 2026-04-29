namespace ClinicaEscolaBase.Models;

public class AnamneseAdolescente
{
    public int DocumentoClinicoId { get; set; }
    public string? Escola { get; set; }
    public string? PaiNome { get; set; }
    public int? PaiIdade { get; set; }
    public string? PaiInstrucao { get; set; }
    public string? PaiProfissao { get; set; }
    public string? MaeNome { get; set; }
    public int? MaeIdade { get; set; }
    public string? MaeInstrucao { get; set; }
    public string? MaeProfissao { get; set; }
    public string? CondicaoConjugalPais { get; set; }
    public string? QueixaPrincipal { get; set; }
    public string? DesdeQuando { get; set; }
    public string? AtitudeMaeFrenteQueixa { get; set; }
    public string? AtitudePaiFrenteQueixa { get; set; }
    public string? AtitudeOutrosFamiliares { get; set; }
    public string? FoiDesejado { get; set; }
    public string? Linguagem { get; set; }
    public string? DesenvolvimentoPsicomotor { get; set; }
    public string? Sono { get; set; }
    public string? Alimentacao { get; set; }
    public string? Tiques { get; set; }
    public string? DificuldadeEscolar { get; set; }
    public string? FamiliarNervoso { get; set; }
    public string? DescricaoFamiliarNervoso { get; set; }
    public string? FamiliarProblemaMental { get; set; }
    public string? ViciosFamilia { get; set; }
    public string? LocalEstudo { get; set; }
    public string? TiposDiversao { get; set; }
    public string? FamiliaFazVisitas { get; set; }
    public string? FamiliaRecebeVisitas { get; set; }
    public string? Companheiros { get; set; }
    public string? QuemEscolheCompanheiros { get; set; }
    public string? Religiao { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
}
