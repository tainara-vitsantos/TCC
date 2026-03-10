import { useState, useEffect } from 'react';
import { getPsicologos } from '../../services/api';

// Imports de Componentes
import ModalidadesAtendimento from '../BuscarPsicologo/Filtros/ModalidadesAtendimento';
import AbordagenTerapeuticas from '../BuscarPsicologo/Filtros/AbordagensTerapeuticas';
import CondicoesTerapeuticas from '../BuscarPsicologo/Filtros/CondicoesTerapeuticas';
import PublicosAtendidos from '../BuscarPsicologo/Filtros/PublicosAtendidos';

// Estilos
import './BuscarPsicologos.css';

function BuscarPsicologo() {
  const API_URL = "https://localhost:7238";
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [filtros, setFiltros] = useState({
    modalidades: [],
    abordagens: [],
    condicoes: [],
    publicos: [],
    buscaTexto: ""
  });

  // Carrega todos os psicólogos ao montar o componente
  useEffect(() => {
    carregarDadosIniciais();
  }, []);

  const carregarDadosIniciais = async () => {
    setLoading(true);
    try {
      const data = await getPsicologos();
      setDadosFiltrados(data);
    } catch (err) {
      console.error("Erro ao carregar psicólogos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Atualiza o estado dos filtros
  const atualizarFiltro = (tipo, valores) => {
    setFiltros(prev => ({ ...prev, [tipo]: valores }));
  };

  // Realiza a busca no Banco de Dados via API
const filtrarResultados = async () => {
  setLoading(true);
  try {
    // Montamos o objeto enviando os arrays completos
    const params = {
      // Se houver texto, o api.js usará a rota /buscar
      nome: filtros.buscaTexto, 
      
      // Se não houver texto, o api.js usará /filtros com estes campos:
      modalidadeIds: filtros.modalidades, 
      abordagemIds: filtros.abordagens,
      condicaoIds: filtros.condicoes,
      publicoIds: filtros.publicos
    };

    const data = await getPsicologos(params);
    setDadosFiltrados(data);
  } catch (err) {
    console.error("Erro ao buscar dados filtrados:", err);
  } finally {
    setLoading(false);
  }
};
  

  return (
    <div className="busca-container">
      <section className="filtro-hero">
        <div className="filtro-card">
          <h2>Encontre seu psicólogo</h2>
          
          <div className="filtro-grid">
            <ModalidadesAtendimento aoMudar={(val) => atualizarFiltro('modalidades', val)} />
            <AbordagenTerapeuticas aoMudar={(val) => atualizarFiltro('abordagens', val)} />
            <CondicoesTerapeuticas aoMudar={(val) => atualizarFiltro('condicoes', val)} />
            <PublicosAtendidos aoMudar={(val) => atualizarFiltro('publicos', val)} />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={filtrarResultados}
              disabled={loading}
            >
              {loading ? 'Buscando...' : 'Filtrar por Categorias'}
            </button>
          </div>

          <hr />

          <div className="busca-texto-container">
            <label htmlFor="busca">Procure pelo Nome ou CRP</label>
            <div className="input-group">
              <input 
                id="busca"
                className="form-control" 
                placeholder="Ex: Gilson Barreto ou 06/12345"
                onChange={(e) => atualizarFiltro('buscaTexto', e.target.value)}
              />
              <button 
                className="btn-buscar" 
                onClick={filtrarResultados}
                disabled={loading}
              >
                {loading ? '...' : 'Buscar'}
              </button>
            </div>
          </div>
        </div>

        <div className="filtro-card">
          <h2>Psicólogos encontrados ({dadosFiltrados.length})</h2>
<div className="lista-resultados">
  {dadosFiltrados.length > 0 ? (
    dadosFiltrados.map((p) => (
      
      <div key={p.id} className="psico-item">
        
        {/* Cabeçalho do Card: Foto + Informações Principais */}
        <div className="psico-header">
        
            <img 
            src={p.usuario.foto 
  ? `${API_URL}/${p.usuario.foto}` 
  : "/img/no-photo.png"}
              alt={`Foto de ${p.nomeCompleto}`} 
              className="psico-foto" 
            />                                       
          <div className="psico-header-info">
            <h3 className="psico-nome">{p.nomeCompleto}</h3>
            <p className="psico-crp">CRP: {p.crp}</p>
          </div>
        </div>

        <p className="psico-modalidade">
          <strong>Modalidade:</strong> {p.modalidadeDeAtendimento}
        </p>
        
        <hr />
        
        <p className="psico-descricao">{p.descricao}</p>

        <div className="psico-tags-container">
          {/* Abordagens */}
          <div className="psico-tag-group">
            {p.abordagens?.map((a, index) => (
              <span key={index} className="tag tag-abordagem">{a}</span>
            ))}
          </div>

          {/* Público */}
          <div className="psico-tag-group">
            {p.tiposPacientes?.map((t, index) => (
              <span key={index} className="tag tag-publico">{t}</span>
            ))}
          </div>

          {/* Condições */}
          <div className="psico-tag-group">
            {p.condicoes?.map((c, index) => (
              <span key={index} className="tag tag-condicao">{c}</span>
            ))}
          </div>
        </div>
{/*Pro link do whatsapp funcionar precisa garantir que o numero de telefone salvo tenha o formato 55DDDnumero sem espaços e sem caraters especiais*/}
        
        <a 
  className="btn-ver-perfil" 
  href={`https://wa.me/${p.usuario.phoneNumber}?text=${encodeURIComponent(`Olá ${p.usuario.nome}, vim pelo Connectamente`)}`} 
  target="_blank" 
  rel="noopener noreferrer"
>
  Conversar no WhatsApp
</a>
      </div>
    ))
  ) : (
    !loading && <div className="lista-vazia">Nenhum psicólogo encontrado.</div>
  )}
</div>
        </div>
      </section>
    </div>
  );
}

export default BuscarPsicologo;