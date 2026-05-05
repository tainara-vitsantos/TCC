using System;

namespace ClinicaEscolaBase.Models;

public class TermoCompromissoInformatizacao
{
    public int DocumentoClinicoId { get; set; }
    public string EstagiarioUsuarioId { get; set; } = string.Empty;
    public Guid PacienteId { get; set; }
    public string? EnderecoEstagiario { get; set; }
    public string? CPFEstagiario { get; set; }
    public bool DeclarouAnuenciaPaciente { get; set; }
    public bool DeclarouSigiloProfissional { get; set; }
    public DateTime? DataAssinaturaEstagiario { get; set; }
    public DateTime? DataAssinaturaPaciente { get; set; }
    public string? Observacoes { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
    public ApplicationUser EstagiarioUsuario { get; set; } = null!;
    public Paciente Paciente { get; set; } = null!;
}
