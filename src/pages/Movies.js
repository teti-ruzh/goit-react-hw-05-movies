import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from '../components/Searchbar';
import MoviesGallery from '../components/MoviesGallery';
import api from '../services/movies-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get('query');
  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    api
      .getSearchedMovie(searchQuery)
      .then(results => {
        if (!results.length) {
          Notify.failure(`Sorry, there is no images for ${searchQuery}`);
          return;
        }
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchQuery]);

  const handleFormSubmit = query => {
    // setSearchQuery(query);
    setSearchParams({ query: query.trim() });
    setMovies([]);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && (
        <MoviesGallery movies={movies} link={''} location={location} />
      )}
    </div>
  );
};
export default Movies;
