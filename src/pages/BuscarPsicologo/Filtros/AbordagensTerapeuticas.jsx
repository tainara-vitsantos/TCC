import { useState } from 'react';
import '../BuscarPsicologos.css';

function AbordagenTerapeuticas({ aoMudar }) {
  const [aberto, setAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

const abordagens = [
  { id: 1, nome: "TCC", descricao: "Foca em mudar padrões de pensamento e comportamento disfuncionais." },
  { id: 2, nome: "Psicanálise", descricao: "Exploração do inconsciente e processos mentais profundos." },
  { id: 3, nome: "Gestalt", descricao: "Foca no aqui e agora e na percepção holística do indivíduo." },
  { id: 4, nome: "Humanista", descricao: "Baseada na empatia e aceitação incondicional do cliente." },
  { id: 5, nome: "Behaviorismo", descricao: "Analisa o comportamento humano através de estímulos e respostas." },
  { id: 6, nome: "Sistêmica", descricao: "Foca nas relações familiares e dinâmicas de grupo." },
  { id: 7, nome: "Bioenergética", descricao: "Integração de mente e corpo no processo terapêutico." },
  { id: 8, nome: "Existencial", descricao: "Exploração do sentido da vida e da liberdade de escolha." },
  { id: 9, nome: "Arteterapia", descricao: "Uso da expressão artística para canalizar emoções." },
  { id: 10, nome: "EMDR", descricao: "Trabalha o processamento de traumas através de movimentos oculares." },
  { id: 11, nome: "Transpessoal", descricao: "Foca no desenvolvimento do potencial humano e espiritual." },
  { id: 12, nome: "Mindfulness", descricao: "Aplicação de técnicas de atenção plena para redução de estresse." },
  { id: 13, nome: "Constelação Familiar", descricao: "Técnica que revela dinâmicas ocultas em sistemas familiares." },
  { id: 14, nome: "Dialética", descricao: "Foca na regulação emocional e tolerância ao mal-estar." },
  { id: 15, nome: "Musicoterapia", descricao: "Uso da música para promover saúde física e mental." },
  { id: 16, nome: "Breve", descricao: "Foca em soluções rápidas para problemas específicos." },
  { id: 17, nome: "Análise Transacional", descricao: "Análise das transações sociais e estados de ego." },
  { id: 18, nome: "Junguiana", descricao: "Explora arquétipos e o inconsciente coletivo." },
  { id: 19, nome: "Aceitação e Compromisso", descricao: "Baseada na filosofia budista e aceitação da realidade." },
  { id: 20, nome: "Pet Terapia", descricao: "Uso de animais para auxílio no tratamento terapêutico." }
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
      <label className="label-busca">Abordagens</label>
      <div className="multiselect-wrapper">
        <div className="select-box" onClick={() => setAberto(!aberto)}>
          {selecionados.length === 0 
            ? "Selecione as opções" 
            : `${selecionados.length} selecionada(s)`}
          <span className={`seta ${aberto ? 'cima' : 'baixo'}`}></span>
        </div>

        {aberto && (
          <div className="opcoes-container">
            {abordagens.map((m) => (
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

export default AbordagenTerapeuticas;