import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

const MovieInfo = ({
  overview,
  title,
  vote_average,
  release_date,
  genres,
  poster_path,
}) => {
  const score = Math.round(vote_average * 10);
  const year = release_date.slice(0, 4);
  const genresArray = genres.flatMap(genre => genre.name).join(', ');

  return (
    <div className={css.thumb}>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
      <div className={css.info}>
        <h2>
          {title} ({year})
        </h2>
        <p>User score: {score}%</p>
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>

        <div>
          <h3>Genres</h3>
          <p>{genresArray}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  poster_path: PropTypes.string.isRequired,
};
