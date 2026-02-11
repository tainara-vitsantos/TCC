import { useNavigate } from "react-router-dom"

function DashboardPsicologo() {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("usuario")
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <h1>Dashboard do Psicologo</h1>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Sair
      </button>
    </div>
  )
}

export default DashboardPsicologo
