import axios from 'axios';

const API_KEY = 'ef95397de100ad4893946e66bda31619';
const API_URL = 'https://api.themoviedb.org/3/';
const TiME_WINDOW = 'week';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}trending/movie/${TiME_WINDOW}?api_key=${API_KEY}&page=1`
  );

  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return data;
};
export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `${API_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data;
};
