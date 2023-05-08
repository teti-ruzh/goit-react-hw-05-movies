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
        setMovie(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

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
