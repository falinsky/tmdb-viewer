import {call, put, takeEvery} from 'redux-saga/effects';
import * as api from '../api';
import {
  FETCH_MOVIE_RECOMMENDATIONS_FAILURE,
  FETCH_MOVIE_RECOMMENDATIONS_REQUEST,
  FETCH_MOVIE_RECOMMENDATIONS_SUCCESS
} from '../actions';
import {normalize} from 'normalizr';
import * as schema from '../schema';

function *movieRecommendationsRequest(action) {
  const {id} = action.payload;

  try {
    const data = yield call(api.getMovieRecommendations, id);

    yield put({
      type: FETCH_MOVIE_RECOMMENDATIONS_SUCCESS,
      payload: {
        ...normalize(data, schema.paginatedListOfMovies),
        id,
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_MOVIE_RECOMMENDATIONS_FAILURE,
      error: error.message,
    });
  }
}

export function *watchMovieRecommendationsRequest() {
  yield takeEvery(FETCH_MOVIE_RECOMMENDATIONS_REQUEST, movieRecommendationsRequest);
}
