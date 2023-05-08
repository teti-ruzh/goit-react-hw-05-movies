import axios from 'axios';
const API_KEY = 'f6a9a085418b1b5e9d2b715abdfccbe6';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    });
};

const getSearchedMovie = query => {
  return axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    });
};

const getMovieDetails = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(response => {
      return response.data;
    });
};

const getMovieCast = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
      return response.data.cast;
    });
};

const getMovieReviews = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    });
};

const api = {
  getTrendingMovies,
  getSearchedMovie,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
export default api;
