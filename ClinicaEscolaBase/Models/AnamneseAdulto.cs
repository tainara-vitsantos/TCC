using System;

namespace ClinicaEscolaBase.Models;

public class AnamneseAdulto
{
    public int DocumentoClinicoId { get; set; }
    public string? FrequenciaAtendimento { get; set; }
    public DateTime? DataHoraAtendimento { get; set; }
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
    public string? AtitudeEntrevistador { get; set; }
    public bool OrientacaoAutoIdentificatoria { get; set; }
    public bool OrientacaoCorporal { get; set; }
    public bool OrientacaoTemporal { get; set; }
    public bool OrientacaoEspacial { get; set; }
    public bool OrientacaoPatologia { get; set; }
    public string? ObservacoesOrientacao { get; set; }
    public string? AtencaoVigilancia { get; set; }
    public string? AtencaoTenacidade { get; set; }
    public string? Memoria { get; set; }
    public string? Inteligencia { get; set; }
    public bool SensopercepcaoNormal { get; set; }
    public bool SensopercepcaoAlucinacao { get; set; }
    public bool PensamentoAcelerado { get; set; }
    public bool PensamentoRetardado { get; set; }
    public bool PensamentoFuga { get; set; }
    public bool PensamentoBloqueio { get; set; }
    public bool PensamentoProlixo { get; set; }
    public bool PensamentoRepeticao { get; set; }
    public bool ConteudoObsessoes { get; set; }
    public bool ConteudoHipocondrias { get; set; }
    public bool ConteudoFobias { get; set; }
    public bool ConteudoDelirios { get; set; }
    public string? ExpansaoEu { get; set; }
    public string? RetracaoEu { get; set; }
    public string? NegacaoEu { get; set; }
    public string? Afetividade { get; set; }
    public string? Humor { get; set; }
    public string? ConscienciaDoencaAtual { get; set; }
    public string? HipoteseDiagnostica { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
}
