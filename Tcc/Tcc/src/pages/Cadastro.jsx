import { useForm } from "react-hook-form"
import { useState } from "react"

function Cadastro() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const tipoUsuario = watch("tipo")

  function onSubmit(data) {
    localStorage.setItem("usuario", JSON.stringify(data))
    alert("Cadastro realizado com sucesso!")
  }

  return (
    <div className="container mt-5">
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Nome */}
        <div className="mb-3">
          <label>Nome</label>
          <input
            className="form-control"
            {...register("nome", { required: "Nome é obrigatório" })}
          />
          {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: "Email é obrigatório" })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        {/* Senha */}
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            {...register("senha", {
              required: "Senha obrigatória",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres"
              }
            })}
          />
          {errors.senha && <p className="text-danger">{errors.senha.message}</p>}
        </div>

        {/* Tipo de usuário */}
        <div className="mb-3">
          <label>Tipo de usuário</label>
          <select
            className="form-control"
            {...register("tipo", { required: "Selecione um tipo" })}
          >
            <option value="">Selecione</option>
            <option value="paciente">Paciente</option>
            <option value="psicologo">Psicólogo</option>
          </select>
          {errors.tipo && <p className="text-danger">{errors.tipo.message}</p>}
        </div>

        {/* Campos extras se for psicólogo */}
        {tipoUsuario === "psicologo" && (
          <>
            <div className="mb-3">
              <label>CRP</label>
              <input
                className="form-control"
                {...register("crp", { required: "CRP obrigatório" })}
              />
              {errors.crp && <p className="text-danger">{errors.crp.message}</p>}
            </div>

            <div className="mb-3">
              <label>Especialidade</label>
              <input
                className="form-control"
                {...register("especialidade", {
                  required: "Especialidade obrigatória"
                })}
              />
              {errors.especialidade && (
                <p className="text-danger">{errors.especialidade.message}</p>
              )}
            </div>
          </>
        )}

        <button type="submit" className="btn btn-success">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Cadastro
