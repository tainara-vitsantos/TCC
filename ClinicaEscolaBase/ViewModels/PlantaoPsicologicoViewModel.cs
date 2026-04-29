using System;
using System.ComponentModel.DataAnnotations;

namespace ClinicaEscolaBase.ViewModels;

public class PlantaoPsicologicoViewModel
{
    public int? DocumentoClinicoId { get; set; }
    public int PacienteId { get; set; }
    public int ProntuarioId { get; set; }

    [DataType(DataType.Date)]
    public DateTime? DataAtendimento { get; set; }

    public string? SinteseQueixaInicial { get; set; }
    public string? RelatoAtendimento { get; set; }
    public string? CondutaEncaminhamento { get; set; }

    [StringLength(20)]
    public string? CRPSupervisor { get; set; }
}
