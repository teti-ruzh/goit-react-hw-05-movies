import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import api from '../services/movies-api';
import MovieInfo from '../components/MovieInfo';
import Loader from '../components/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api
      .getMovieDetails(movieId)
      .then(response => {
        // console.log(response);
        setMovie(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  // const { overview, title } = movie;
  // const score = Math.round(movie.vote_average * 10);
  //   const year = movie.release_date.slice(0, 4);
  //   const genres = movie.genres.flatMap(genre => genre.name);
  //   const imgSrc = `https://www.themoviedb.org/v4/image/${poster_path}`;

  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.back}>
        Go back
      </Link>
      {movie && <MovieInfo {...movie} />}
      <div>
        <h3>Additional information</h3>
        <ul className={css.addInfo}>
          <li>
            <Link to="cast" className={css.infoLink}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.infoLink}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
