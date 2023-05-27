import { Link, useLocation } from "react-router-dom";

const TrendingMoviesItem = ({movie: {original_title, poster_path, id}}) => {
    const location = useLocation();

    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
    return (
        <li>
            <Link to={`movies/${id}`} state={{from: location}}>
                <img src={poster} width="80" alt={original_title}></img>
                <h2>{original_title}</h2>
            </Link>
          </li>
    )
}

export default TrendingMoviesItem;