using System.Collections.Generic;
using ClinicaEscolaBase.Models;

namespace ClinicaEscolaBase.ViewModels;

public class ProntuarioDetalhesViewModel
{
    public Paciente Paciente { get; set; } = null!;
    public Prontuario Prontuario { get; set; } = null!;
    public IReadOnlyCollection<Atendimento> Atendimentos { get; set; } = new List<Atendimento>();
    public IReadOnlyCollection<DocumentoClinico> DocumentosClinicos { get; set; } = new List<DocumentoClinico>();
    public IReadOnlyCollection<EvolucaoAtendimento> Evolucoes { get; set; } = new List<EvolucaoAtendimento>();
}
