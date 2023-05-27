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

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        setLoading(true);
        const movieDetailData = await fetchMovieDetails(movieId);
        setSelectedMovieDetail(movieDetailData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
{loading && <Loading/>}
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <MovieCard detail={selectedMovieDetail} />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
