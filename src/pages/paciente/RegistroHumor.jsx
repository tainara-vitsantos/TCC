import { useState } from "react";

function RegistroHumor() {
  const [registro, setRegistro] = useState({
    situacao: "",
    humorAntes: 50,
    pensamentoQuente: "",
    evidenciasFavor: "",
    evidenciasContra: "",
    pensamentoAlternativo: "",
    humorDepois: 50
  });

  const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const handleSalvar = () => {
    console.log("Registro Salvo:", registro);
    alert("Exercício concluído com sucesso!");
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 text-center text-md-start flex-column flex-md-row">
        <div>
          <h2 className="fw-bold mb-0">Diário de Pensamentos ⚖️</h2>
          <p className="text-muted">Pratique a reestruturação cognitiva passo a passo.</p>
        </div>
        <button className="btn btn-success shadow-sm px-4 mt-3 mt-md-0" onClick={handleSalvar}>
          Finalizar e Salvar
        </button>
      </div>

      <div className="row g-4">
        {/* Coluna da Esquerda: O Gatilho */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-primary text-white fw-bold py-3">
              1. A Situação e o Humor Inicial
            </div>
            <div className="card-body">
              <div className="mb-4">
                <label className="form-label fw-bold small text-uppercase">O que aconteceu?</label>
                <textarea 
                  name="situacao"
                  className="form-control bg-light border-0" 
                  rows="3" 
                  placeholder="Quem, onde, quando e o quê..."
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label fw-bold small text-uppercase d-flex justify-content-between">
                  Intensidade do Humor <span>{registro.humorAntes}%</span>
                </label>
                <input 
                  type="range" 
                  name="humorAntes"
                  className="form-range" 
                  onChange={handleChange}
                />
                <div className="d-flex justify-content-between text-muted small">
                  <span>Leve</span>
                  <span>Intenso</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: O Pensamento */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-danger text-white fw-bold py-3">
              2. O Pensamento Quente
            </div>
            <div className="card-body text-center">
              <label className="form-label fw-bold small text-uppercase mb-3 text-danger">
                Qual o pensamento automático que mais te incomoda?
              </label>
              <textarea 
                name="pensamentoQuente"
                className="form-control border-danger border-opacity-25" 
                style={{ borderStyle: 'dashed' }}
                rows="4" 
                placeholder="Ex: 'Eu nunca faço nada certo'..."
                onChange={handleChange}
              />
              <p className="small text-muted mt-3">
                <i className="bi bi-info-circle"></i> Tente identificar a ideia que gera a maior carga emocional.
              </p>
            </div>
          </div>
        </div>

        {/* Linha das Evidências (Tabela Lado a Lado) */}
        <div className="col-12">
          <div className="card border-0 shadow-sm overflow-hidden">
            <div className="card-header bg-dark text-white fw-bold py-3 text-center">
              3. O Tribunal da Mente (Análise de Fatos)
            </div>
            <div className="row g-0 border-bottom">
              <div className="col-md-6 border-end p-4 bg-light bg-opacity-50">
                <h6 className="fw-bold text-success mb-3">✅ Evidências que APOIAM</h6>
                <textarea 
                  name="evidenciasFavor"
                  className="form-control border-0 bg-transparent" 
                  rows="5" 
                  placeholder="Liste fatos reais que confirmam esse pensamento..."
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 p-4">
                <h6 className="fw-bold text-danger mb-3">❌ Evidências que NÃO APOIAM</h6>
                <textarea 
                  name="evidenciasContra"
                  className="form-control border-0 bg-transparent" 
                  rows="5" 
                  placeholder="O que você diria para um amigo nesta situação? Que fatos você está ignorando?"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Final: Reestruturação */}
        <div className="col-12">
          <div className="card border-0 shadow-lg border-start border-5 border-info">
            <div className="card-body p-4">
              <h4 className="fw-bold text-info mb-3">4. Pensamento Alternativo e Reavaliação</h4>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <label className="form-label fw-bold small text-uppercase">Uma visão mais equilibrada:</label>
                  <textarea 
                    name="pensamentoAlternativo"
                    className="form-control border-info border-opacity-25" 
                    rows="3" 
                    placeholder="Baseado nos fatos acima, como você pode ver isso de forma realista?"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 text-center bg-light rounded p-3">
                  <label className="form-label fw-bold small text-uppercase">Novo Humor: {registro.humorDepois}%</label>
                  <input 
                    type="range" 
                    name="humorDepois"
                    className="form-range mb-2" 
                    onChange={handleChange}
                  />
                  <div className={`badge ${registro.humorDepois < registro.humorAntes ? 'bg-success' : 'bg-warning'} p-2 w-100`}>
                    {registro.humorDepois < registro.humorAntes ? "O desconforto diminuiu! ✨" : "Mantenha o exercício."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroHumor;