import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MoviesDetails = () => {
  const { movieId } = useParams();

  const [selectedMovieDetail, setSelectedMovieDetail] = useState({});

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const movieDetailData = await fetchMovieDetails(movieId);
        setSelectedMovieDetail(movieDetailData);

      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);

  const location = useLocation();
    console.log(location);

  return (
    
  <main>
    <Link to={location.state?.from ?? '/'}>Go back</Link>
<MovieCard detail={selectedMovieDetail}/>
<Outlet />
  </main>
  )
};

export default MoviesDetails;
