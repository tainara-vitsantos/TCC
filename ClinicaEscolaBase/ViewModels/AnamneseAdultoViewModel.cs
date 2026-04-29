using System;
using System.ComponentModel.DataAnnotations;

namespace ClinicaEscolaBase.ViewModels;

public class AnamneseAdultoViewModel
{
    public int? DocumentoClinicoId { get; set; }
    public int PacienteId { get; set; }
    public int ProntuarioId { get; set; }

    [DataType(DataType.DateTime)]
    public DateTime? DataHoraAtendimento { get; set; }

    [StringLength(100)]
    public string? FrequenciaAtendimento { get; set; }

    public string? QueixaPrincipal { get; set; }
    public string? QueixaSecundaria { get; set; }
    public string? Sintomas { get; set; }
    public string? InicioPatologia { get; set; }
    public string? FrequenciaPatologia { get; set; }
    public string? IntensidadePatologia { get; set; }
    public string? TratamentosAnteriores { get; set; }
    public string? Medicamentos { get; set; }
    public string? HistoriaInfancia { get; set; }
    public string? Rotina { get; set; }
    public string? Vicios { get; set; }
    public string? Hobbies { get; set; }
    public string? Trabalho { get; set; }
    public string? HistoricoFamiliarPais { get; set; }
    public string? HistoricoFamiliarIrmaos { get; set; }
    public string? HistoricoFamiliarConjuge { get; set; }
    public string? HistoricoFamiliarFilhos { get; set; }
    public string? HistoricoFamiliarLar { get; set; }
    public string? HistoriaPatologicaPregressa { get; set; }
    public string? ExameAparencia { get; set; }
    public string? ExameComportamento { get; set; }
    public string? HipoteseDiagnostica { get; set; }
}
