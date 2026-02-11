import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


function PrivateRoute({ children, tipoPermitido }) {
   const { usuario } = useContext(AuthContext)

  // Se não estiver logado
  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  // Se tiver tipo permitido e for diferente
  if (tipoPermitido && usuario.tipo !== tipoPermitido) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute





  