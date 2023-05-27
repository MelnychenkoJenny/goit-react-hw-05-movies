import { Error } from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchTrendingMovies(1);
        setTrendingMovies([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>The most popular movies today</h1>
      <TrendingMoviesList trendingMovies={trendingMovies} />
      {loading && <Loading />}
      {error && <Error error={error} />}
    </>
  );
};
export default Home;
