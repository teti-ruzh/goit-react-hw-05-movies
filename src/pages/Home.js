import { useState, useEffect } from 'react';
import api from '../services/movies-api';
import MoviesGallery from '../components/MoviesGallery';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api
      .getTrendingMovies()
      .then(results => {
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {movies && <MoviesGallery movies={movies} link={'movies/'} />}
    </div>
  );
};

export default Home;
