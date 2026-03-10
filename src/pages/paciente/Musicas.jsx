import React, { useState } from 'react';

function Musicas() {
  const [videoAtivo, setVideoAtivo] = useState("1ZYbU82GVz4"); // Vídeo inicial

  const playlists = [
    {
      categoria: "Relaxamento Profundo 🌿",
      itens: [
        { id: "1ZYbU82GVz4", titulo: "Sons da Natureza e Piano", duracao: "3:00:00" },
        { id: "lFcSrYw-ARY", titulo: "Meditação Guiada: Ansiedade", duracao: "15:00" },
        { id: "77ZozI0rw7w", titulo: "Frequências Solfeggio 528Hz", duracao: "2:00:00" }
      ]
    },
    {
      categoria: "Foco e Estudo 🧠",
      itens: [
        { id: "jfKfPfyJRdk", titulo: "Lofi Hip Hop Radio", duracao: "Ao Vivo" },
        { id: "4xDzrJKXOOY", titulo: "Ondas Alfa para Concentração", duracao: "1:30:00" }
      ]
    },
    {
      categoria: "Para Dormir 🌙",
      itens: [
        { id: "pU3S92YV2fM", titulo: "Ruído Branco Suave", duracao: "8:00:00" },
        { id: "2OEL4P1Rz04", titulo: "Chuva na Janela", duracao: "10:00:00" }
      ]
    }
  ];

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Espaço de Serenidade 🎵</h2>
        <p className="text-muted">Escolha uma trilha sonora para o seu momento de cuidado.</p>
      </div>

      <div className="row g-4">
        {/* Player Principal */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg overflow-hidden rounded-4 bg-dark">
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${videoAtivo}?autoplay=1`}
                title="Player de Saúde Mental"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
            <div className="card-body bg-white border-top">
              <h5 className="fw-bold mb-1">Tocando agora 🔊</h5>
              <p className="text-muted small mb-0">Lembre-se: use fones de ouvido para uma experiência imersiva.</p>
            </div>
          </div>
        </div>

        {/* Lista de Seleção */}
        <div className="col-lg-4">
          <div className="accordion shadow-sm" id="accordionPlaylists">
            {playlists.map((secao, idx) => (
              <div className="accordion-item border-0 mb-2 shadow-sm rounded overflow-hidden" key={idx}>
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${idx !== 0 ? 'collapsed' : ''} fw-bold`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${idx}`}
                  >
                    {secao.categoria}
                  </button>
                </h2>
                <div 
                  id={`collapse${idx}`} 
                  className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} 
                  data-bs-parent="#accordionPlaylists"
                >
                  <div className="accordion-body p-0">
                    <div className="list-group list-group-flush">
                      {secao.itens.map((musica) => (
                        <button
                          key={musica.id}
                          onClick={() => setVideoAtivo(musica.id)}
                          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 py-3 ${videoAtivo === musica.id ? 'bg-primary-subtle border-start border-primary border-4' : ''}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="me-2">{videoAtivo === musica.id ? "▶️" : "🎧"}</span>
                            <div className="text-truncate" style={{maxWidth: '180px'}}>
                              <div className={`fw-semibold small ${videoAtivo === musica.id ? 'text-primary' : ''}`}>
                                {musica.titulo}
                              </div>
                            </div>
                          </div>
                          <span className="badge rounded-pill bg-light text-dark small fw-normal border">
                            {musica.duracao}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dica de Respiração Integrada */}
      <div className="mt-5 p-4 bg-info bg-opacity-10 rounded-4 border border-info border-opacity-25 text-center">
        <h5 className="fw-bold text-info-emphasis">Dica Pro: Respiração 4-7-8</h5>
        <p className="mb-0">Inspire por 4 segundos, segure por 7 e expire lentamente por 8 enquanto ouve a música.</p>
      </div>
    </div>
  );
}

export default Musicas;