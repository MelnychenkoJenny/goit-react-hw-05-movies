import axios from 'axios';

const API_KEY = 'ef95397de100ad4893946e66bda31619';
const API_URL = 'https://api.themoviedb.org/';
const TiME_WINDOW = 'week';

export const fetchTrendingMovies = async (page) => {
    const {data} = await axios.get(`${API_URL}3/trending/movie/${TiME_WINDOW}?api_key=${API_KEY}&page=${page}`)

return data;
}

export const fetchMovieDetails = async (id) => {
    const {data} = await axios.get(`${API_URL}3/movie/${id}?api_key=${API_KEY}`)
    return data;
}

export const fetchSearchMovie = async (query, page) => {
    const {data} = await axios.get(`${API_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
    return data;
}
