import { useState, useEffect } from "react"

function PerfilPaciente() {
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

  function handleFoto(e) {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      const usuarioAtualizado = { ...usuario, foto: reader.result }
      setUsuario(usuarioAtualizado)
      localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado))
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }



  return (
    <div className="container mt-5">
      <h2>Meu Perfil - Paciente</h2>

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

        <label>Convênio</label>
        <input
          className="form-control mb-3"
          disabled={!editando}
          value={usuario.convenio || ""}
          onChange={(e) =>
            setUsuario({ ...usuario, convenio: e.target.value })
          }
        />

        <label>Nova Senha</label>
        <input
          type="password"
          className="form-control mb-3"
          disabled={!editando}
          onChange={(e) =>
            setUsuario({ ...usuario, senha: e.target.value })
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

export default PerfilPaciente
