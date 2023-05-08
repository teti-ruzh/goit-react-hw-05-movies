import PropTypes from 'prop-types';
import MoviesGalleryItem from '../MoviesGalleryItem';
import css from './MoviesGallery.module.css';

const MoviesGallery = ({ movies, link, location }) => {
  return (
    <ul className={css.gallery}>
      {movies.map(movie => {
        return (
          <MoviesGalleryItem
            {...movie}
            key={movie.id}
            link={`${link}${movie.id}`}
            location={location}
          />
        );
      })}
    </ul>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  link: PropTypes.string.isRequired,
};
