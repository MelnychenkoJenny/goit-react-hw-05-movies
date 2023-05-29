import TrendingMoviesItem from 'components/MoviesItem/MoviesItem';
import { MoviesListStyle } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MoviesListStyle>
      {movies.map(movie => {
        return <TrendingMoviesItem key={movie.id} movie={movie} />;
      })}
    </MoviesListStyle>
  );
};
export default MoviesList;
