import { useState } from 'react';
import '../BuscarPsicologos.css';

function PublicosAtendidos({ aoMudar }) {
  const [aberto, setAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

const publicosAlvo = [
  { id: 1, nome: "Infantil", descricao: "Paciente na primeira infância (0 a 12 anos)." },
  { id: 2, nome: "Adolescente", descricao: "Indivíduo na fase da adolescência (13 a 18 anos)." },
  { id: 3, nome: "Adulto", descricao: "Paciente adulto (19 a 60 anos)." },
  { id: 4, nome: "Geriátrico", descricao: "Paciente idoso (acima de 60 anos)." },
  { id: 5, nome: "Home Care", descricao: "Atendimento realizado no domicílio do paciente." },
  { id: 6, nome: "Familiar", descricao: "Atendimento focado na dinâmica do grupo familiar." },
  { id: 7, nome: "Casal", descricao: "Casal em processo terapêutico conjunto." },
  { id: 8, nome: "Jurídico", descricao: "Paciente encaminhado por medidas socioeducativas ou judiciais." },
  { id: 9, nome: "Corporativo", descricao: "Atendimento para funcionários de empresas conveniadas." }
];

  const toggleCheckbox = (id) => {
    const novosSelecionados = selecionados.includes(id)
      ? selecionados.filter(item => item !== id)
      : [...selecionados, id];
    
    setSelecionados(novosSelecionados);
    aoMudar(novosSelecionados); // Envia o array de IDs para o pai
  };

  return (
    <div className="dropdown-container">
      <label className="label-busca">Publicos Atendidos</label>
      <div className="multiselect-wrapper">
        <div className="select-box" onClick={() => setAberto(!aberto)}>
          {selecionados.length === 0 
            ? "Selecione as opções" 
            : `${selecionados.length} selecionada(s)`}
          <span className={`seta ${aberto ? 'cima' : 'baixo'}`}></span>
        </div>

        {aberto && (
          <div className="opcoes-container">
            {publicosAlvo.map((m) => (
              <label key={m.id} className="opcao-item">
                <input
                  type="checkbox"
                  checked={selecionados.includes(m.id)}
                  onChange={() => toggleCheckbox(m.id)}
                />
                {m.nome}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicosAtendidos;