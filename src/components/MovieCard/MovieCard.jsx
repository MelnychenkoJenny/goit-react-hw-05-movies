import { Link } from "react-router-dom";

const MovieCard = ({detail: {poster_path, title, vote_average, overview, genres}}) => {
  
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';
    const rating = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';
    const review = overview ? overview : 'Not overview'
 


  return (
    <>
      <div>
          <img src={posterUrl} alt={title} width="100"></img>
          <div>
            <h2>{title}</h2>
            <p>User score: {rating}</p>
            <p>
              <span>Overview: </span>
              {review}
            </p>
            {genres && genres.length > 0 && (
            <p>
              <span>Genres: </span>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
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
