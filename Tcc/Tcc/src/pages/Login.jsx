import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "./auth.css"

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleLogin(e) {
    e.preventDefault()

    const sucesso = login(email, senha)

    if (sucesso) {
      navigate("/dashboard-paciente") // ou lógica baseada no tipo
    } else {
      alert("Credenciais inválidas")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Entrar</h2>
        <p className="subtitle">Acesse sua conta ConnectaMente</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>

        <div className="auth-footer">
          Não tem conta? <Link to="/cadastro">Criar conta</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
