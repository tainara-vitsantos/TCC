import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function PerfilPaciente() {
  const { usuario, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(usuario?.nome || "")
  const [email, setEmail] = useState(usuario?.email || "")

  function salvarAlteracoes() {
    const usuarioAtualizado = {
      ...usuario,
      nome,
      email
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado))
    setEditando(false)
    alert("Perfil atualizado com sucesso!")
  }

  function sair() {
    logout()
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <h2>Perfil do Paciente</h2>

      <div className="card p-4 mt-4">

        {editando ? (
          <>
            <input
              className="form-control mb-2"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-success me-2" onClick={salvarAlteracoes}>
              Salvar
            </button>

            <button className="btn btn-secondary" onClick={() => setEditando(false)}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <p><strong>Nome:</strong> {usuario?.nome}</p>
            <p><strong>Email:</strong> {usuario?.email}</p>
            <p><strong>Tipo:</strong> {usuario?.tipo}</p>

            <button className="btn btn-primary me-2" onClick={() => setEditando(true)}>
              Editar Perfil
            </button>

            <button className="btn btn-danger" onClick={sair}>
              Sair
            </button>
          </>
        )}

      </div>
    </div>
  )
}

export default PerfilPaciente
