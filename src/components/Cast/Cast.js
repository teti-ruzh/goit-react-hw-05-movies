import { useState, useEffect } from 'react';
import api from '../../services/movies-api';
import css from './Cast.module.css';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api
      .getMovieCast(movieId)
      .then(cast => {
        setCast(cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul className={css.gallery}>
        {cast.map(({ character, credit_id, name, profile_path }) => {
          return (
            <li key={credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
