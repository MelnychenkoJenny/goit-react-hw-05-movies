import { Error } from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MoviesDetails = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [selectedMovieDetail, setSelectedMovieDetail] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        setLoading(true);
        const movieDetailData = await fetchMovieDetails(movieId);
        setSelectedMovieDetail(movieDetailData);
  
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails(movieId);

  }, [movieId]);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <MovieCard detail={selectedMovieDetail} />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
