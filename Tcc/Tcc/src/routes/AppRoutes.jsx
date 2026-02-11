import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import DashboardPaciente from "../pages/DashboardPaciente"
import DashboardPsicologo from "../pages/DashboardPsicologo"
import PrivateRoute from "./PrivateRoute"
import Home from "../pages/Home"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard-paciente"
          element={
            <PrivateRoute tipoPermitido="paciente">
              <DashboardPaciente />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard-psicologo"
          element={
            <PrivateRoute tipoPermitido="psicologo">
              <DashboardPsicologo />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
