import {call, put, takeEvery} from 'redux-saga/effects';
import * as api from '../api';
import {FETCH_POPULAR_MOVIES_FAILURE, FETCH_POPULAR_MOVIES_REQUEST, FETCH_POPULAR_MOVIES_SUCCESS} from '../actions';
import {normalize} from 'normalizr';
import * as schema from '../schema';

function *popularMoviesRequest(action) {
  try {
    const data = yield call(api.getPopularMovies, action.payload.page);

    yield put({
      type: FETCH_POPULAR_MOVIES_SUCCESS,
      payload: normalize(data, schema.paginatedListOfMovies),
    });
  } catch (error) {
    yield put({
      type: FETCH_POPULAR_MOVIES_FAILURE,
      error: error.message,
    });
  }
}

export function *watchPopularMoviesRequest() {
  yield takeEvery(FETCH_POPULAR_MOVIES_REQUEST, popularMoviesRequest);
}