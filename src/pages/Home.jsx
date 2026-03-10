import { Link } from "react-router-dom"

function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold text-primary">
            ConnectaMente
          </span>

          <div>
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/cadastro" className="btn btn-primary">
              Criar Conta
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero - Causa */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Saúde mental é prioridade, não luxo.
          </h1>

          <p className="lead mt-4">
            Ansiedade, depressão e estresse fazem parte da realidade de milhões de pessoas.
            Buscar ajuda é um ato de coragem.
          </p>
        </div>
      </section>

      {/* Sobre Saúde Mental */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Por que falar sobre saúde mental?
          </h2>

          <p className="text-center text-muted mb-5">
            A saúde mental influencia diretamente nossa qualidade de vida,
            relacionamentos, desempenho acadêmico e profissional.
            Cuidar da mente é tão importante quanto cuidar do corpo.
          </p>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Ansiedade</h5>
              <p className="text-muted">
                Preocupação excessiva, tensão constante e dificuldade de relaxar.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Depressão</h5>
              <p className="text-muted">
                Tristeza persistente, falta de energia e perda de interesse.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Estresse</h5>
              <p className="text-muted">
                Sobrecarga emocional causada por pressão constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terapia Cognitivo-Comportamental */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">
            O que é Terapia Cognitivo-Comportamental (TCC)?
          </h2>

          <p className="lead">
            A TCC é uma abordagem psicológica baseada na relação entre
            pensamentos, emoções e comportamentos.
          </p>

          <p>
            Ao identificar padrões de pensamento negativos,
            é possível desenvolver estratégias mais saudáveis
            para lidar com desafios do dia a dia.
          </p>
        </div>
      </section>

      {/* Solução */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Onde o ConnectaMente entra?
          </h2>

          <p className="lead text-muted">
            Nossa plataforma conecta pacientes e psicólogos,
            facilitando o acesso ao cuidado psicológico
            de forma simples e organizada.
          </p>

          <div className="mt-4">
            <Link to="/buscar-psicologo" className="btn btn-success btn-lg me-3">
              Buscar Ajuda
            </Link>

            <Link to="/cadastro" className="btn btn-outline-primary btn-lg">
              Sou Psicólogo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center bg-light">
        <small className="text-muted">
          © 2026 ConnectaMente — Promovendo saúde mental através da tecnologia.
        </small>
      </footer>

    </div>
  )
}

export default Home