export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMovie = (id) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: {
    id,
  },
});
