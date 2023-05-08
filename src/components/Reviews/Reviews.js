import { useState, useEffect } from 'react';
import api from '../../services/movies-api';
import css from './Reviews.module.css';

const { useParams } = require('react-router-dom');

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api
      .getMovieReviews(movieId)
      .then(results => {
        // console.log(results);
        setReviews(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul className={css.reviews}>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
