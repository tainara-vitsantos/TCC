import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "./dashboard.css"

function DashboardLayout({ menuItems, children, titulo }) {
  const { usuario, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [paginaAtiva, setPaginaAtiva] = useState("home")
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h3 className="logo">ConnectaMente</h3>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${paginaAtiva === item.id ? "ativo" : ""}`}
              onClick={() => setPaginaAtiva(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="main-area">

        {/* TOPBAR */}
        <div className="topbar">
          <h5>{titulo}</h5>

          <div
            className="user-area"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <span>{usuario?.nome}</span>

            <img
              src="https://i.pravatar.cc/40"
              alt="perfil"
              className="avatar"
            />

            <div className={`dropdown ${menuAberto ? "show" : ""}`}>
              <button onClick={() => navigate("/perfil")}>
                Meu Perfil
              </button>
              <button onClick={() => navigate("/editar-perfil")}>
                Editar Dados
              </button>
              <hr />
              <button className="logout" onClick={logout}>
                Sair
              </button>
            </div>
          </div>
        </div>

        {/* PÁGINA */}
        <div className="content-area">
          {children(paginaAtiva)}
        </div>

      </main>
    </div>
  )
}

export default DashboardLayout
