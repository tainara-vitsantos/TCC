import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado"))
    if (usuarioSalvo) {
      setUsuario(usuarioSalvo)
    }
  }, [])

  function login(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    )

    if (usuarioEncontrado) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado))
      setUsuario(usuarioEncontrado)
      return true
    }

    return false
  }

  function logout() {
    localStorage.removeItem("usuarioLogado")
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}