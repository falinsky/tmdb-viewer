import * as api from '../api';
import {normalize} from 'normalizr';
import * as schema from './schema';

export const FETCH_POPULAR_MOVIES_REQUEST = 'FETCH_POPULAR_MOVIES_REQUEST';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE';

export const fetchPopularMovies = () => (dispatch) => {
  dispatch({
    type: FETCH_POPULAR_MOVIES_REQUEST,
  });

  api.getPopularMovies().then(
    ({results, page, total_results, total_pages}) => dispatch({
      type: FETCH_POPULAR_MOVIES_SUCCESS,
      payload: {
        page,
        totalResults: total_results,
        totalPages: total_pages,
        ...normalize(results, schema.arrayOfMovies),
      },
    }),
    error => dispatch({
      type: FETCH_POPULAR_MOVIES_FAILURE,
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
