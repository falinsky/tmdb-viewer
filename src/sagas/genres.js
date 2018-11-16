import {call, put, takeEvery} from 'redux-saga/effects';
import * as api from '../api';
import {FETCH_GENRES_FAILURE, FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS} from '../actions';
import {normalize} from 'normalizr';
import * as schema from '../schema';

function *genresRequest() {
  try {
    const {genres} = yield call(api.getGenresListForMovies);

    yield put({
      type: FETCH_GENRES_SUCCESS,
      payload: normalize(genres, schema.arrayOfGenres),
    });
  } catch (error) {
    yield put({
      type: FETCH_GENRES_FAILURE,
      error: error.message,
    });
  }
}

export function *watchGenresRequest() {
  yield takeEvery(FETCH_GENRES_REQUEST, genresRequest);
}