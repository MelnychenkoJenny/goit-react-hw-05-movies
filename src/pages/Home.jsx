import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";
import { useEffect } from "react";
import { useState } from "react";
import {fetchTrendingMovies} from "services/api";


const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([]);
useEffect(()=> {
  
const getTrendingMovies = async() => {
  try {
    const {results} = await fetchTrendingMovies(1);
    setTrendingMovies(results)

  } catch (error) {
    console.log(error);
  }
}

getTrendingMovies()

}, [])


    return (
      
      <main>
        <h1>The most popular movies today</h1>
<TrendingMoviesList trendingMovies={trendingMovies}/>
       
      </main>
    );
  };
  export default Home