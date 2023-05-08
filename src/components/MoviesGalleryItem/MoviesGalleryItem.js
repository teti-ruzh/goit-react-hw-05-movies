import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MoviesGalleryItem.module.css';

const MoviesGalleryItem = ({ title, poster_path, link, location }) => {
  return (
    <li className={css.movitThumb}>
      <Link to={link} state={{ from: location }} className={css.movieLink}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
          className={css.movieImg}
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default MoviesGalleryItem;

MoviesGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};
