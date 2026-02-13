import { useState, useEffect } from "react"

function PerfilPsicologo() {
  const [usuario, setUsuario] = useState(null)
  const [editando, setEditando] = useState(false)

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("usuario"))
    setUsuario(dados)
  }, [])

  function salvarAlteracoes() {
    localStorage.setItem("usuario", JSON.stringify(usuario))
    setEditando(false)
    alert("Perfil atualizado com sucesso!")
  }

  if (!usuario) return <h3>Carregando...</h3>

  return (
    <div className="container mt-5">
      <h2>Meu Perfil - Psicólogo</h2>

      <div className="card p-4 mt-3">

        <label>Nome</label>
        <input
          className="form-control mb-2"
          disabled={!editando}
          value={usuario.nome || ""}
          onChange={(e) =>
            setUsuario({ ...usuario, nome: e.target.value })
          }
        />

        <label>Email</label>
        <input
          className="form-control mb-2"
          disabled
          value={usuario.email || ""}
        />

        <label>Telefone</label>
        <input
          className="form-control mb-2"
          disabled={!editando}
          value={usuario.telefone || ""}
          onChange={(e) =>
            setUsuario({ ...usuario, telefone: e.target.value })
          }
        />

        <label>CRP</label>
        <input
          className="form-control mb-2"
          disabled={!editando}
          value={usuario.crp || ""}
          onChange={(e) =>
            setUsuario({ ...usuario, crp: e.target.value })
          }
        />

        <label>Especialidade</label>
        <input
          className="form-control mb-3"
          disabled={!editando}
          value={usuario.especialidade || ""}
          onChange={(e) =>
            setUsuario({ ...usuario, especialidade: e.target.value })
          }
        />

        {!editando ? (
          <button
            className="btn btn-primary"
            onClick={() => setEditando(true)}
          >
            Editar Perfil
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={salvarAlteracoes}
          >
            Salvar Alterações
          </button>
        )}

      </div>
    </div>
  )
}

export default PerfilPsicologo
