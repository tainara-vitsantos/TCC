using System;

namespace ClinicaEscolaBase.Models;

public class TermoPsicoterapiaIndividual
{
    public int DocumentoClinicoId { get; set; }
    public string? NomeClienteNoTermo { get; set; }
    public string? RGCliente { get; set; }
    public string? EstadoCivilCliente { get; set; }
    public string? ProfissaoCliente { get; set; }
    public string? CidadeCliente { get; set; }
    public string? RuaCliente { get; set; }
    public string? TelefoneCliente { get; set; }
    public string? NomeEstagiarioNoTermo { get; set; }
    public string? TelefoneEstagiario { get; set; }
    public DateTime? DataAssinatura { get; set; }
    public DateTime? DataInicioVigencia { get; set; }
    public DateTime? DataFimVigencia { get; set; }
    public string? FrequenciaSemanal { get; set; }
    public int? DuracaoSessaoMinutos { get; set; }
    public string? Abordagem { get; set; }
    public string? RegraCancelamento { get; set; }
    public string? RegraFaltas { get; set; }
    public string? Observacoes { get; set; }

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
}
