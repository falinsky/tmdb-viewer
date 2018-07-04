import * as api from '../api';
import {normalize} from 'normalizr';
import * as schema from './schema';

export const FETCH_POPULAR_MOVIES_REQUEST = 'FETCH_POPULAR_MOVIES_REQUEST';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE';

export const fetchPopularMovies = (page) => (dispatch) => {
  dispatch({
    type: FETCH_POPULAR_MOVIES_REQUEST,
  });

  api.getPopularMovies(page).then(
    (data) => dispatch({
      type: FETCH_POPULAR_MOVIES_SUCCESS,
      payload: normalize(data, schema.paginatedListOfMovies),
    }),
    error => dispatch({
      type: FETCH_POPULAR_MOVIES_FAILURE,
      error: error.message
    })
  );

};

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

const fetchMovie = (id) => (dispatch) => {
  dispatch({
    type: FETCH_MOVIE_REQUEST,
  });

  api.getMovie(id).then(
    (data) => dispatch({
      type: FETCH_MOVIE_SUCCESS,
      payload: normalize(data, schema.movie),
    }),
    error => dispatch({
      type: FETCH_MOVIE_FAILURE,
      error: error.message
    })
  );

};

export const loadMovie = (id) => (dispatch, getState) => {
  if (getState().entities.movies[id]) {
    return;
  }

  return dispatch(fetchMovie(id));
};

export const FETCH_MOVIE_RECOMMENDATIONS_REQUEST = 'FETCH_MOVIE_RECOMMENDATIONS_REQUEST';
export const FETCH_MOVIE_RECOMMENDATIONS_SUCCESS = 'FETCH_MOVIE_RECOMMENDATIONS_SUCCESS';
export const FETCH_MOVIE_RECOMMENDATIONS_FAILURE = 'FETCH_MOVIE_RECOMMENDATIONS_FAILURE';

export const fetchMovieRecommendations = (id) => (dispatch) => {
  dispatch({
    type: FETCH_MOVIE_RECOMMENDATIONS_REQUEST,
  });

  api.getMovieRecommendations(id).then(
    (data) => dispatch({
      type: FETCH_MOVIE_RECOMMENDATIONS_SUCCESS,
      payload: {
        ...normalize(data, schema.paginatedListOfMovies),
        id,
      },
    }),
    error => dispatch({
      type: FETCH_MOVIE_RECOMMENDATIONS_FAILURE,
      error: error.message
    })
  );
};

export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const fetchGenres = () => (dispatch) => {
  dispatch({
    type: FETCH_GENRES_REQUEST,
  });

  api.getGenresListForMovies().then(
    ({genres}) => dispatch({
      type: FETCH_GENRES_SUCCESS,
      payload: normalize(genres, schema.arrayOfGenres),
    }),
    error => dispatch({
      type: FETCH_GENRES_FAILURE,
      error: error.message,
    })
  );
};

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

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMovies = (query) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIES_REQUEST,
    payload: {
      query,
    },
  });

  api.searchMovies(query).then(
    (data) => dispatch({
      type: SEARCH_MOVIES_SUCCESS,
      payload: {
        ...normalize(data, schema.paginatedListOfMovies),
        query,
      },
    }),
    error => dispatch({
      type: SEARCH_MOVIES_FAILURE,
      error: error.message
    })
  );
};

export const SEARCH_MOVIES_UPDATE_QUERY = 'SEARCH_MOVIES_UPDATE_QUERY';

export const updateSearchMoviesQuery = (value) => ({
  type: SEARCH_MOVIES_UPDATE_QUERY,
  payload: value,
});