using System;
using System.ComponentModel.DataAnnotations;

namespace ClinicaEscolaBase.ViewModels;

public class VinculoAlunoPacienteFormViewModel
{
    [Required]
    public int PacienteId { get; set; }

    [Required]
    public string AlunoId { get; set; } = string.Empty;

    public bool PermiteLeitura { get; set; } = true;
    public bool PermiteEscrita { get; set; } = true;

    [DataType(DataType.DateTime)]
    public DateTime? DataLiberacao { get; set; }

    [StringLength(1000)]
    public string? Observacoes { get; set; }
}
