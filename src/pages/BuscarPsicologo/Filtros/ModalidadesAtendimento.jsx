import { useState } from 'react';
import '../BuscarPsicologos.css';

function ModalidadesAtendimento({ aoMudar }) {
  const [aberto, setAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

  const modalidades = [
    { id: 0, nome: "Presencial" },
    { id: 1, nome: "Online" },
    { id: 2, nome: "Híbrido" }
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
      <label className="label-busca">Modalidade</label>
      <div className="multiselect-wrapper">
        <div className="select-box" onClick={() => setAberto(!aberto)}>
          {selecionados.length === 0 
            ? "Selecione as opções" 
            : `${selecionados.length} selecionada(s)`}
          <span className={`seta ${aberto ? 'cima' : 'baixo'}`}></span>
        </div>

        {aberto && (
          <div className="opcoes-container">
            {modalidades.map((m) => (
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

export default ModalidadesAtendimento;