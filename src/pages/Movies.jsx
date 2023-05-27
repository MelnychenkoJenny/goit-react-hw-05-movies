import { FcSearch } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('film')?? ""
  
  const updateQueryString = (evt) => {
   if(evt.target.value==='')return setSearchParams({});
    setSearchParams({film: evt.target.value});
  };
  return (
    <>
      <h2>Search movie</h2>
      <form>
        <input type="text" value={searchMovie} onChange={updateQueryString}/>
        <button type="submit">
          <FcSearch />
        </button>
      </form>
    </>
  );
};
export default Movies;
