import { useState } from "react"
import { Link } from "react-router-dom"
import "./auth.css"

function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [tipo, setTipo] = useState("")

  // Paciente
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")

  // Psicólogo
  const [crp, setCrp] = useState("")
  const [especialidade, setEspecialidade] = useState("")

  function handleCadastro(e) {
    e.preventDefault()

    const dados = {
      nome,
      email,
      senha,
      tipo,
      ...(tipo === "paciente" && { idade, telefone }),
      ...(tipo === "psicologo" && { crp, especialidade })
    }

    console.log("Dados enviados:", dados)
    alert("Cadastro realizado (mock)")
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Criar Conta</h2>

        <form onSubmit={handleCadastro}>

          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="">Tipo de usuário</option>
            <option value="paciente">Paciente</option>
            <option value="psicologo">Psicólogo</option>
          </select>

          {/* 👇 CAMPOS CONDICIONAIS */}

          {tipo === "paciente" && (
            <>
              <input
                type="number"
                placeholder="Idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </>
          )}

          {tipo === "psicologo" && (
            <>
              <input
                type="text"
                placeholder="CRP"
                value={crp}
                onChange={(e) => setCrp(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                required
              />
            </>
          )}

          <button type="submit">Cadastrar</button>
        </form>

        <div className="auth-footer">
          Já tem conta? <Link to="/login">Entrar</Link>
        </div>
      </div>
    </div>
  )
}

export default Cadastro