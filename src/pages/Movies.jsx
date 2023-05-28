import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

const Movies = () => {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('film') ?? '';

  useEffect(() => {
    const getSearchMovies = async (searchQuery, page) => {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovie(searchQuery, page);
        console.log(results);
        setSearchingMovies([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchMovie) getSearchMovies(searchMovie, 1);
  }, [searchMovie]);

  const handleSearchMovieChange = searchQuery => {
    setSearchParams({ film: searchQuery });
  };

  return (
    <>
      <h2>Search movie</h2>
      <SearchBar onSubmit={handleSearchMovieChange} />
      <ul>
        {searchingMovies.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
