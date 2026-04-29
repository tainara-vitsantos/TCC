namespace ClinicaEscolaBase.Models;

public class ResponsavelLegal : EntityBase
{
    public int PacienteId { get; set; }
    public string NomeCompleto { get; set; } = string.Empty;
    public string? RG { get; set; }
    public string? CPF { get; set; }
    public string? GrauParentesco { get; set; }
    public string? Telefone { get; set; }
    public string? Email { get; set; }
    public string? Endereco { get; set; }
    public bool ResponsavelPrincipal { get; set; }

    public Paciente Paciente { get; set; } = null!;
    public ICollection<TermoAutorizacaoMenor> TermosAutorizacaoMenor { get; set; } = new List<TermoAutorizacaoMenor>();
}
