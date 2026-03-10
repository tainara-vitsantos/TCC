import React, { useState } from 'react';

function Trilhas() {
  const jornadas = [
    {
      id: 1,
      titulo: "Alívio Imediato da Ansiedade",
      descricao: "Técnicas rápidas para acalmar a mente em momentos de crise.",
      icone: "🌬️",
      cor: "border-info",
      exercicios: [
        "Respiração Quadrada (4-4-4-4)",
        "Técnica de Aterramento 5-4-3-2-1",
        "Relaxamento Muscular Progressivo"
      ]
    },
    {
      id: 2,
      titulo: "Higiene do Sono",
      descricao: "Prepare seu corpo e mente para um descanso profundo e reparador.",
      icone: "🌙",
      cor: "border-primary",
      exercicios: [
        "Desconexão Digital (30 min antes)",
        "Escaneamento Corporal (Body Scan)",
        "Escrita Terapêutica de Descarrego"
      ]
    },
    {
      id: 3,
      titulo: "Foco e Produtividade",
      descricao: "Treine sua atenção plena para realizar suas tarefas com calma.",
      icone: "🎯",
      cor: "border-success",
      exercicios: [
        "Meditação de 5 minutos de Foco",
        "Pausa Consciente (Pomodoro)",
        "Afirmações de Capacidade"
      ]
    }
  ];

  return (
    <div className="container py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Trilhas de Autocuidado 🌿</h2>
        <p className="text-muted">Pequenos passos diários para uma mente mais equilibrada.</p>
      </div>

      <div className="row g-4">
        {jornadas.map((trilha) => (
          <div className="col-md-4" key={trilha.id}>
            <div className={`card h-100 shadow-sm border-0 border-top border-4 ${trilha.cor}`}>
              <div className="card-body p-4">
                <div className="fs-1 mb-3">{trilha.icone}</div>
                <h5 className="fw-bold card-title">{trilha.titulo}</h5>
                <p className="card-text text-secondary small">{trilha.descricao}</p>
                
                <hr className="my-3 opacity-10" />
                
                <h6 className="small fw-bold text-uppercase text-muted mb-3">O que você fará:</h6>
                <ul className="list-unstyled mb-4">
                  {trilha.exercicios.map((ex, i) => (
                    <li key={i} className="mb-2 small d-flex align-items-center">
                      <span className="me-2 text-success">✓</span> {ex}
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn-outline-dark w-100 rounded-pill mt-auto">
                  Começar Jornada
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção Extra: Exercício de Respiração Visual */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-primary text-white p-5 border-0 rounded-4 text-center shadow-lg overflow-hidden position-relative">
            <div className="position-relative z-1">
              <h3 className="fw-bold mb-3">Precisa de um momento agora?</h3>
              <p className="mb-4">Acompanhe o círculo para sincronizar sua respiração.</p>
              
              {/* Círculo de Respiração Animado */}
              <div className="breathing-circle mx-auto mb-4"></div>
              
              <p className="fst-italic opacity-75">Inspire... Expire...</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .breathing-circle {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: breathe 8s infinite ease-in-out;
          border: 2px solid white;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.8); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Trilhas;