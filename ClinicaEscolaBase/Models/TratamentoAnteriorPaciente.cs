using ClinicaEscolaBase.Enums;

namespace ClinicaEscolaBase.Models;

public class TratamentoAnteriorPaciente : EntityBase
{
    public Guid PacienteId { get; set; }
    public TipoTratamentoAnterior TipoTratamento { get; set; }
    public bool PossuiHistorico { get; set; }
    public string? MotivoInternacao { get; set; }
    public string? Observacoes { get; set; }

    public Paciente Paciente { get; set; } = null!;
}
