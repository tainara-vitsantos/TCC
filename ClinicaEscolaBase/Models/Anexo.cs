using System;

namespace ClinicaEscolaBase.Models;

public class Anexo : EntityBase
{
    public int DocumentoClinicoId { get; set; }
    public string NomeOriginal { get; set; } = string.Empty;
    public string NomeArmazenado { get; set; } = string.Empty;
    public string? Extensao { get; set; }
    public string? MimeType { get; set; }
    public long TamanhoBytes { get; set; }
    public string CaminhoArquivo { get; set; } = string.Empty;
    public string? HashArquivo { get; set; }
    public string EnviadoPorUsuarioId { get; set; } = string.Empty;
    public DateTime DataUpload { get; set; } = DateTime.UtcNow;

    public DocumentoClinico DocumentoClinico { get; set; } = null!;
    public ApplicationUser EnviadoPorUsuario { get; set; } = null!;
}
