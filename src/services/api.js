import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7238/api',
  paramsSerializer: {
    indexes: null 
  }
});

// Esta função agora lida com os dois tipos de busca
export const getPsicologos = async (params) => {
  // Se houver busca por nome ou CRP, chamamos a rota de busca
  if (params?.nome) {
    const response = await api.get('/Psicologos/buscar', { 
      params: { nomeOuCRP: params.nome } 
    });
    return response.data;
  }

  // Caso contrário, chamamos a rota de filtros
  const response = await api.get('/Psicologos/filtros', { params });
  return response.data;
};