import React,{ useState, useEffect} from 'react';
import 'bootsrap/dist/css/bootstrap.min.css'
import MovieList from './components/MovieList';
import './App.css'


const App = () => {
  useState [movies, setMovies] = useState([])

  const getMoviesRequest = async () => {
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=48cc4e39'

    const response = await fetch(url)
    const responseJson = await response.json()

    console.log(responseJson);
    setMovies(responseJson.Search);
  }

  useEffect(() => {
    getMoviesRequest();
  },[])

  return (
    <div className='container=fluid'>
      <div className='row'>
        <MovieList movies = {movies} />
      </div>
    </div>
  );
};

export default App;