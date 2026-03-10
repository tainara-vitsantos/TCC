import { useNavigate } from "react-router-dom"
import { useState } from "react"
import RegistroHumor from "./RegistroHumor"
import Profissionais from "./Profissionais"
import Noticias from "./Noticias"
import Musicas from "./Musicas"
import Trilhas from "./Trilhas"

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
      <div className="bg-dark text-white p-4" style={{ width: "250px" }}>

        <h4 className="mb-4 fw-bold">ConnectaMente</h4>

        <div className="d-flex flex-column gap-2">

          <button
            className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("home")}
          >
            Home
          </button>

          <button
            className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("noticias")}
          >
            Notícias
          </button>

          <button
            className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("trilhas")}
          >
            Trilhas
          </button>

          <button
            className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("profissionais")}
          >
            Profissionais
          </button>

          <button
            className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("musicas")}
          >
            Músicas
          </button>

          <button
            className="btn btn-dark text-start"
            onClick={() => setPaginaAtiva("registro")}
          >
            Registro Diário
          </button>

        </div>

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


          {paginaAtiva === "noticias" && <Noticias />}

          {paginaAtiva === "profissionais" && <Profissionais />}

          {paginaAtiva === "registro" && <RegistroHumor />}

          {paginaAtiva === "musicas" && <Musicas />}

           {paginaAtiva === "trilhas" && <Trilhas />}


          {paginaAtiva === "home" && (
            <div className="container py-4">
              {/* Header de Boas-vindas */}
              <header className="mb-5 text-center text-md-start">
                <h2 className="fw-bold">Olá, [Nome]! 👋</h2>
                <p className="text-muted">Como está sua mente hoje? Vamos cuidar dela juntos.</p>
              </header>

              {/* Grid de Ações Principais */}
              <div className="row g-4 mb-5">
                {[
                  { t: "Humor", d: "Como você se sente?", i: "🙂", b: "btn-outline-primary", p: "registro", c: "Humor de Hoje" },
                  { t: "Trilhas", d: "Respire e relaxe.", i: "🌿", b: "btn-outline-success", p: "trilhas", c: "Autocuidado" },
                  { t: "Psicólogos", d: "Ajuda profissional.", i: "🤝", b: "btn-outline-info", p: "profissionais", c: "Conversar" },
                  { t: "Notícias", d: "Saúde mental e dicas.", i: "📖", b: "btn-outline-warning", p: "noticias", c: "Ler Mais" }
                ].map((item, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <div className="card h-100 border-0 shadow-sm p-3 text-center transition-card">
                      <div className="fs-1 mb-2">{item.i}</div>
                      <h6 className="fw-bold">{item.c}</h6>
                      <p className="small text-muted d-none d-md-block">{item.d}</p>
                      <button
                        className={`btn btn-sm ${item.b} mt-auto w-100`}
                        onClick={() => setPaginaAtiva(item.p)}
                      >
                        Acessar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              

              {/* Conteúdo Dinâmico */}
              <div className="row g-4">
                <div className="col-md-7">
                  <div className="card border-0 bg-light p-4 h-100">
                    <div className="d-flex align-items-center mb-3">
                      <span className="fs-4 me-2">💡</span>
                      <h5 className="mb-0 fw-bold">Dica de Bem-estar</h5>
                    </div>
                    <p className="text-secondary italic">
                      "O autocuidado não é egoísmo, é sobrevivência. Reserve 5 minutos para uma respiração consciente agora."
                    </p>
                    <hr />
                    <small className="text-muted">Sugerido com base no seu último registro.</small>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="card border-0 shadow-sm overflow-hidden h-100">
                    <div className="card-body p-0">
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ minHeight: "200px", border: "none" }}
                        src="https://www.youtube.com/embed/1ZYbU82GVz4"
                        title="Relaxing Music"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* CSS Adicional (Coloque no seu arquivo de estilos) */}
              <style>{`
      .transition-card { transition: transform 0.2s ease-in-out; cursor: pointer; }
      .transition-card:hover { transform: translateY(-5px); border: 1px solid #dee2e6 !important; }
    `}</style>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default DashboardPaciente