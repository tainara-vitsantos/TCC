import { useContext } from "react"
import DashboardLayout from "../layouts/DashboardLayout"
import { AuthContext } from "../context/AuthContext"

function PerfilPsicologo() {

  const { usuario } = useContext(AuthContext)

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "pacientes", label: "Pacientes" },
    { id: "agenda", label: "Agenda" },
    { id: "relatorios", label: "Relatórios" }
  ]

  return (
    <DashboardLayout
      menuItems={menuItems}
      titulo="Perfil Profissional"
    >
      {() => (

        <div className="perfil-container">

          {/* CARD PRINCIPAL */}
          <div className="perfil-card">

            <div className="perfil-header">

              <div className="foto-area">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="foto"
                  className="foto-perfil"
                />
                <button className="btn-alterar-foto">
                  Alterar Foto
                </button>
              </div>

              <div className="info-principal">
                <h2>{usuario?.nome}</h2>
                <p className="especialidade">Psicólogo Clínico</p>
                <p className="crp">CRP: 00/12345</p>
              </div>

            </div>

            <hr />

            <div className="perfil-body">

              <div className="info-bloco">
                <h4>Sobre</h4>
                <p>
                  Psicólogo com experiência em terapia cognitivo-comportamental,
                  atendimento online e presencial. Foco em ansiedade,
                  depressão e desenvolvimento emocional.
                </p>
              </div>

              <div className="info-bloco">
                <h4>Especialidades</h4>
                <div className="tags">
                  <span>Ansiedade</span>
                  <span>Depressão</span>
                  <span>Terapia Cognitiva</span>
                  <span>Relacionamentos</span>
                </div>
              </div>

              <div className="info-bloco">
                <h4>Contato</h4>
                <p>Email: {usuario?.email}</p>
                <p>Telefone: (00) 00000-0000</p>
              </div>

            </div>

            <div className="perfil-footer">
              <button className="btn-editar">
                Editar Perfil
              </button>
            </div>

          </div>

        </div>
      )}
    </DashboardLayout>
  )
}

export default PerfilPsicologo
