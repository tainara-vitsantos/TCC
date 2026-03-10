import { useState } from 'react';
import '../BuscarPsicologos.css';

function CondicoesTerapeuticas({ aoMudar }) {
  const [aberto, setAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

const condicoesTerapeuticas = [
  { id: 1, nome: "Depressão", descricao: "Estado de prostração profunda, perda de interesse e desânimo." },
  { id: 2, nome: "Ansiedade", descricao: "Preocupação excessiva, tensão e medo constante." },
  { id: 3, nome: "Luto", descricao: "Processo de elaboração emocional após uma perda significativa." },
  { id: 4, nome: "Gestação", descricao: "Acompanhamento psicológico durante o período de gravidez." },
  { id: 5, nome: "Conflito Conjugal", descricao: "Dificuldades de comunicação e convivência entre parceiros." },
  { id: 6, nome: "Burnout", descricao: "Esgotamento profissional físico e mental extremo." },
  { id: 7, nome: "Dependência Química", descricao: "Dependência de substâncias químicas ou comportamentais." },
  { id: 8, nome: "Baixa Autoestima", descricao: "Dificuldade em aceitar a própria imagem ou baixa autoconfiança." },
  { id: 9, nome: "Estresse Pós-Traumático", descricao: "Reações intensas após vivenciar eventos violentos ou traumáticos." },
  { id: 10, nome: "Transtorno Alimentar", descricao: "Anorexia, bulimia ou compulsão alimentar." },
  { id: 11, nome: "TDAH", descricao: "Dificuldade de concentração e inquietude motora." },
  { id: 12, nome: "Borderline", descricao: "Padrão de instabilidade emocional e nos relacionamentos." },
  { id: 13, nome: "TOC", descricao: "Pensamentos intrusivos e comportamentos repetitivos." },
  { id: 14, nome: "Fobia Específica", descricao: "Medo irracional e paralisante de objetos ou situações." },
  { id: 15, nome: "Autismo", descricao: "Acompanhamento para desenvolvimento de crianças no espectro." },
  { id: 16, nome: "Bipolaridade", descricao: "Oscilações acentuadas entre euforia (mania) e depressão." },
  { id: 17, nome: "Pânico", descricao: "Crises agudas de medo intenso e sintomas físicos." },
  { id: 18, nome: "Conflito Adolescente", descricao: "Dificuldade em lidar com as mudanças da fase adolescente." },
  { id: 19, nome: "Geriatria", descricao: "Questões relacionadas à memória e perda de autonomia na velhice." },
  { id: 20, nome: "Problemas Escolares", descricao: "Dificuldades de aprendizado ou socialização no ambiente escolar." }
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
      <label className="label-busca">Condições</label>
      <div className="multiselect-wrapper">
        <div className="select-box" onClick={() => setAberto(!aberto)}>
          {selecionados.length === 0 
            ? "Selecione as opções" 
            : `${selecionados.length} selecionada(s)`}
          <span className={`seta ${aberto ? 'cima' : 'baixo'}`}></span>
        </div>

        {aberto && (
          <div className="opcoes-container">
            {condicoesTerapeuticas.map((m) => (
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

export default CondicoesTerapeuticas;