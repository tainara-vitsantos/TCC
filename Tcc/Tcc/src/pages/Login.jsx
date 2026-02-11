import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Login() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  function onSubmit(data) {
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"))

    if (
      usuarioSalvo &&
      data.email === usuarioSalvo.email &&
      data.senha === usuarioSalvo.senha
    ) {
      // chama o login do contexto
      login(usuarioSalvo)

      if (usuarioSalvo.tipo === "paciente") {
        navigate("/dashboard-paciente")
      } else {
        navigate("/dashboard-psicologo")
      }
    } else {
      alert("Email ou senha inválidos")
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          {...register("email", { required: true })}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Senha"
          {...register("senha", { required: true })}
        />

        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  )
}

export default Login
