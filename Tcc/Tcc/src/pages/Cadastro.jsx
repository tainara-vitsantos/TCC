import { useForm } from "react-hook-form"

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <div className="container mt-5">
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email obrigatório</span>}

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Senha"
          {...register("senha", { required: true })}
        />

        <button className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro
