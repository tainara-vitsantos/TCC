import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  // Carregar usuário ao iniciar
  useEffect(() => {
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado"))
    if (usuarioSalvo) {
      setUsuario(usuarioSalvo)
    }
  }, [])

  function login(usuarioData) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioData))
    setUsuario(usuarioData)
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
