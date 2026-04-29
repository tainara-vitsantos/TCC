namespace ClinicaEscolaBase.Models;

public class PlantaoPsicologico
{
    public int DocumentoClinicoId { get; set; }
    public string? SinteseQueixaInicial { get; set; }
    public string? RelatoAtendimento { get; set; }
    public string? CondutaEncaminhamento { get; set; }
    public string? NomeEstagiarioInformado { get; set; }
    public string? NomeSupervisorInformado { get; set; }
    public string? CRPSupervisor { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
}
