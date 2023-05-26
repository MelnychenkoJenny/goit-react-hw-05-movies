import TrendingMoviesItem from "components/TrendingMoviesItem/TrendingMoviesItem";

const TrendingMoviesList = ({trendingMovies}) => {
  return (
    <ul>
      {trendingMovies.map(movie => {
       
        return (
          <TrendingMoviesItem key={movie.id} movie={movie}/>
        );
      })}
    </ul>
  );
};
export default TrendingMoviesList;
