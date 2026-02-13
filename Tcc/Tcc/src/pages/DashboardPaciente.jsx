import { useNavigate, Link } from "react-router-dom"

function DashboardPaciente() {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("usuario")
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <h1>Dashboard do Paciente</h1>

      <Link to="/perfil-paciente" className="btn btn-outline-primary mt-3 me-2">
        Meu Perfil
      </Link>

      <button className="btn btn-danger mt-3" onClick={logout}>
        Sair
      </button>
    </div>
  )
}

export default DashboardPaciente
