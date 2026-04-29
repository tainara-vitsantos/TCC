using System.ComponentModel.DataAnnotations;

namespace ClinicaEscolaBase.ViewModels;

public class AnamneseAdolescenteViewModel
{
    public int? DocumentoClinicoId { get; set; }
    public int PacienteId { get; set; }
    public int ProntuarioId { get; set; }

    [StringLength(200)]
    public string? Escola { get; set; }

    public string? QueixaPrincipal { get; set; }
    public string? DesdeQuando { get; set; }
    public string? AtitudeMaeFrenteQueixa { get; set; }
    public string? AtitudePaiFrenteQueixa { get; set; }
    public string? AtitudeOutrosFamiliares { get; set; }
    public string? Linguagem { get; set; }
    public string? DesenvolvimentoPsicomotor { get; set; }
    public string? Sono { get; set; }
    public string? Alimentacao { get; set; }
    public string? DificuldadeEscolar { get; set; }
    public string? LocalEstudo { get; set; }
    public string? TiposDiversao { get; set; }
    public string? Religiao { get; set; }
}
