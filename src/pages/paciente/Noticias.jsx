import React from 'react';

function Noticias() {
  // Simulação de dados (Poderia vir de uma API no futuro)
  const listaNoticias = [
    {
      id: 1,
      titulo: "A Importância da Terapia no Século XXI",
      resumo: "Muito além de tratar transtornos, a terapia é uma ferramenta poderosa de autoconhecimento e inteligência emocional.",
      categoria: "Autocuidado",
      data: "10 Out 2023",
      cor: "text-primary"
    },
    {
      id: 2,
      titulo: "Ansiedade em Jovens: O que os dados dizem?",
      resumo: "Estudos recentes apontam que o uso excessivo de telas é um dos fatores que contribuem para o aumento do estresse.",
      categoria: "Saúde",
      data: "08 Out 2023",
      cor: "text-danger"
    },
    {
      id: 3,
      titulo: "5 Alimentos que ajudam no seu humor",
      resumo: "Descubra como o que você come pode influenciar diretamente na produção de serotonina e dopamina.",
      categoria: "Nutrição",
      data: "05 Out 2023",
      cor: "text-success"
    }
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Portal de Saúde Mental 📖</h2>
        <span className="badge bg-light text-dark border">Atualizado hoje</span>
      </div>

      <div className="row g-4">
        {listaNoticias.map((noticia) => (
          <div className="col-md-6 col-lg-4" key={noticia.id}>
            <div className="card h-100 border-0 shadow-sm hover-shadow transition">
              {/* Placeholder de Imagem (Opcional) */}
              <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: '160px', borderRadius: '8px 8px 0 0' }}>
                 <span className="fs-1">📰</span>
              </div>
              
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <small className={`fw-bold ${noticia.cor}`}>{noticia.categoria}</small>
                  <small className="text-muted">{noticia.data}</small>
                </div>
                <h5 className="card-title fw-bold">{noticia.titulo}</h5>
                <p className="card-text text-secondary small">
                  {noticia.resumo}
                </p>
              </div>
              
              <div className="card-footer bg-white border-0 pb-3">
                <button className="btn btn-link p-0 text-decoration-none fw-bold">
                  Ler notícia completa →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default Noticias;