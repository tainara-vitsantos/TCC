import React from 'react';

function Profissionais() {
  const psicologos = [
    {
      id: 1,
      nome: "Dra. Ana Silva",
      especialidade: "Terapia Cognitivo-Comportamental",
      foco: "Ansiedade e Stress",
      crp: "06/123456",
      nota: 4.9,
      avatar: "https://i.pravatar.cc/150?u=ana"
    },
    {
      id: 2,
      nome: "Dr. Carlos Mendes",
      especialidade: "Psicanálise",
      foco: "Depressão e Luto",
      crp: "06/987654",
      nota: 4.8,
      avatar: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      id: 3,
      nome: "Dra. Juliana Ferraz",
      especialidade: "Psicologia Positiva",
      foco: "Autoestima",
      crp: "06/554433",
      nota: 5.0,
      avatar: "https://i.pravatar.cc/150?u=juliana"
    }
  ];

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="fw-bold">Especialistas Disponíveis 🤝</h2>
        <p className="text-muted">Encontre o profissional ideal para sua jornada de saúde mental.</p>
      </div>

      <div className="row g-4">
        {psicologos.map((p) => (
          <div key={p.id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm p-3 hover-effect">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src={p.avatar} 
                  alt={p.nome} 
                  className="rounded-circle me-3" 
                  style={{ width: '64px', height: '64px', objectFit: 'cover', border: '2px solid #0d6efd' }}
                />
                <div>
                  <h5 className="mb-0 fw-bold">{p.nome}</h5>
                  <small className="text-muted">CRP: {p.crp}</small>
                </div>
              </div>

              <div className="mb-3">
                <span className="badge bg-primary-subtle text-primary mb-2 d-inline-block">
                  {p.especialidade}
                </span>
                <p className="small text-secondary mb-0">
                  <strong>Foco:</strong> {p.foco}
                </p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="text-warning">
                  {"★".repeat(Math.floor(p.nota))} 
                  <span className="text-muted small ms-1">({p.nota})</span>
                </div>
                <button className="btn btn-outline-primary btn-sm px-3 rounded-pill">
                  Agendar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-effect { transition: all 0.3s ease; }
        .hover-effect:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 8px 15px rgba(0,0,0,0.1) !important;
        }
        .bg-primary-subtle { background-color: #e7f1ff; }
      `}</style>
    </div>
  );
}

export default Profissionais;