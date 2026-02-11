import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand fw-bold">
            Sistema PsicoConnect
          </span>

          <div>
            <Link to="/login" className="btn btn-outline-light me-2">
              Login
            </Link>
            <Link to="/cadastro" className="btn btn-success">
              Cadastro
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-center bg-light"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="text-center px-3">
          <h1 className="display-4 fw-bold">
            Conectando Pacientes e Psicólogos
          </h1>

          <p className="lead mt-3">
            Plataforma digital para facilitar agendamentos e atendimentos psicológicos.
          </p>

          <div className="mt-4">
            <Link to="/login" className="btn btn-primary btn-lg me-3">
              Entrar
            </Link>

            <Link to="/cadastro" className="btn btn-outline-success btn-lg">
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
