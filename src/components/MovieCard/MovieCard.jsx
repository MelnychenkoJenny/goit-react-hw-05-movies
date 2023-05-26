import { Link } from "react-router-dom";

const MovieCard = ({
  detail: { poster_path, title, vote_average, overview, genres },
}) => {
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const getGenre = genres => {
    if (!genres) return 'Unknown genre';
    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      <div>
          <img src={poster} alt={title} width="100"></img>
          <div>
            <h2>{title}</h2>
            <p>User score: {vote_average}</p>
            <p>
              <span>Overview </span>
              {overview}
            </p>
    
            <p>
              <span>Genres </span>
              {getGenre(genres)}
            </p>
          </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
            <li><Link to='cast'>Cast</Link></li>
            <li><Link to='reviews'>Reviews</Link></li>
        </ul>
      </div>

    </>
  );
};
export default MovieCard;
