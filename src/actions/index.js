export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMovie = (id) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: {
    id,
  },
});

export const FAVORITES_ADD_MOVIE = 'FAVORITES_ADD_MOVIE';
export const FAVORITES_REMOVE_MOVIE = 'FAVORITES_REMOVE_MOVIE';

export const addMovieToFavorites = (id) => ({
  type: FAVORITES_ADD_MOVIE,
  payload: id,
});

export const removeMovieFromFavorites = (id) => ({
  type: FAVORITES_REMOVE_MOVIE,
  payload: id,
});
