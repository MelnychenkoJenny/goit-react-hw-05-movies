import { Link, useLocation } from "react-router-dom";

const MoviesItem = ({movie: {title, poster_path, id}}) => {
    const location = useLocation();
    
const pathName = location.pathname.includes('/movies') ? '' : 'movies/';

const posterUrl = poster_path
? `https://image.tmdb.org/t/p/w400/${poster_path}`
: 'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';
    return (
        <li>
            <Link to={`${pathName}${id}`} state={{from: location}}>
                <img src={posterUrl} width="80" alt={title}></img>
                <h3>{title}</h3>
            </Link>
          </li>
    )
}

export default MoviesItem;