import { Error } from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchSearchMovie } from 'services/api';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('film') ?? '';

  useEffect(() => {
    const getSearchMovies = async (searchQuery) => {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovie(searchQuery);

        if (results.length === 0) {
          toast.error(`Sorry, there are no movies matching your query: "${searchMovie}". Please try to search something else.`);
          setSearchingMovies([]); 
          setSearchParams({})}
        setSearchingMovies([...results]);
      } catch (error) {

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchMovie) getSearchMovies(searchMovie);
  }, [searchMovie, setSearchParams]);

  const handleSearchMovieChange = searchQuery => {
    setSearchParams({ film: searchQuery });
  };

  return (
    <>
      <h2>Search movie</h2>
      <SearchBar onSubmit={handleSearchMovieChange} />
      <MoviesList movies={searchingMovies}/>
      {loading && <Loading />}
      {error && <Error error={error} />}
    </>
  );
};
export default Movies;
