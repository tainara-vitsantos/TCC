import { useNavigate } from "react-router-dom"
import { useState } from "react"

function DashboardPaciente() {
  const navigate = useNavigate()
  const [paginaAtiva, setPaginaAtiva] = useState("home")
  const [menuAberto, setMenuAberto] = useState(false)

  function logout() {
    localStorage.removeItem("usuario")
    navigate("/")
  }

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <div
        className="bg-dark text-white p-4"
        style={{ width: "250px" }}
      >
        <h4 className="mb-4 fw-bold">ConnectaMente</h4>

        <ul className="nav flex-column gap-2">

          <button className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("home")}>
            Home
          </button>

          <button className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("noticias")}>
            Notícias
          </button>

          <button className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("trilhas")}>
            Trilhas
          </button>

          <button className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("profissionais")}>
            Profissionais
          </button>

          <button className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("musicas")}>
            Músicas
          </button>

          <button className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("registro")}>
            Registro Diário
          </button>

        </ul>
      </div>

      {/* ÁREA PRINCIPAL */}
      <div className="flex-grow-1 bg-light">

        {/* TOPBAR */}
        <div className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">

          <h5 className="mb-0">Dashboard do Paciente</h5>

          <div className="position-relative">

            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={() => setMenuAberto(!menuAberto)}
            >
              <span>Olá, Paciente</span>

              <img
                src="https://i.pravatar.cc/40"
                alt="foto"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* DROPDOWN */}
            {menuAberto && (
              <div
                className="position-absolute bg-white shadow rounded mt-2"
                style={{ right: 0, width: "180px", zIndex: 10 }}
              >
                <button
                  className="dropdown-item"
                  onClick={() => navigate("/perfil-paciente")}
                >
                  Meu Perfil
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => navigate("/editar-perfil")}
                >
                  Editar Dados
                </button>

                <hr className="m-0" />

                <button
                  className="dropdown-item text-danger"
                  onClick={logout}
                >
                  Sair
                </button>
              </div>
            )}

          </div>

        </div>

        {/* CONTEÚDO */}
        <div className="p-5">

          {paginaAtiva === "home" && (
            <div className="card shadow-sm p-4">
              <h3>Bem-vindo</h3>
              <p>Seu espaço para cuidar da sua saúde mental.</p>
            </div>
          )}

          {paginaAtiva === "noticias" && (
            <div className="card shadow-sm p-4">
              <h3>Notícias</h3>
              <p>Conteúdos sobre bem-estar e saúde mental.</p>
            </div>
          )}

          {paginaAtiva === "trilhas" && (
            <div className="card shadow-sm p-4">
              <h3>Trilhas</h3>
              <p>Programas terapêuticos personalizados.</p>
            </div>
          )}

          {paginaAtiva === "profissionais" && (
            <div className="card shadow-sm p-4">
              <h3>Profissionais</h3>
              <p>Especialistas disponíveis para atendimento.</p>
            </div>
          )}

          {paginaAtiva === "musicas" && (
            <div className="card shadow-sm p-4">
              <h3>Músicas</h3>
              <p>Playlist para relaxamento e foco.</p>
            </div>
          )}

          {paginaAtiva === "registro" && (
            <div className="card shadow-sm p-4">
              <h3>Registro Diário</h3>

              <textarea
                className="form-control mt-3"
                rows="4"
                placeholder="Como você está se sentindo hoje?"
              />

              <button className="btn btn-primary mt-3">
                Salvar
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default DashboardPaciente
