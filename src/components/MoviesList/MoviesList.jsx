import TrendingMoviesItem from "components/MoviesItem/MoviesItem";

const MoviesList = ({movies}) => {
  return (
    <ul>
      {movies.map(movie => {
       
        return (
          <TrendingMoviesItem key={movie.id} movie={movie}/>
        );
      })}
    </ul>
  );
};
export default MoviesList;
