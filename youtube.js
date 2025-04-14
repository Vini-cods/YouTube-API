import axios from 'axios';

const API_KEY = 'coloque sua chave';

export const buscarVideos = async (query) => {
  try {
    const pesquisa = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: API_KEY,
      },
    });
    return pesquisa.data.items;
  } catch (erro) {
    console.error('Erro ao buscar vídeos do YouTube:', erro);
    throw erro;
  }
};
