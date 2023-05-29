import { Error } from 'components/Error/Error';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { CastInfo, CastItem, CastList, Empty } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const { cast } = await fetchMovieCast(movieId);

        setCastInfo(cast);
      } catch (error) {
        setError(error.message);
      }
    };

    getCast(movieId);
  }, [movieId]);
  return (
    <>
      {castInfo.length ? (
        <CastList>
          {castInfo.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                  width="200"
                ></img>
              ) : (
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg'
                  }
                  alt="Not found"
                  width="200"
                ></img>
              )}
              <CastInfo>
                <h3>{name}</h3>
                {character ? (
                  <p>Character: {character}</p>
                ) : (
                  <p>Character: Unknown</p>
                )}
              </CastInfo>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <Empty>
          Unfortunately, we don't have cast information for this movie.
        </Empty>
      )}
      {error && <Error error={error} />}
    </>
  );
};

export default Cast;
