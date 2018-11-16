import {call, put, select, takeEvery} from 'redux-saga/effects';
import * as api from '../api';
import {FETCH_MOVIE_FAILURE, FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, fetchMovie, LOAD_MOVIE} from '../actions';
import {normalize} from 'normalizr';
import * as schema from '../schema';

function *movieRequest(action) {
  const {id} = action.payload;

  try {
    const data = yield call(api.getMovie, id);

    yield put({
      type: FETCH_MOVIE_SUCCESS,
      payload: normalize(data, schema.movie),
    });
  } catch (error) {
    yield put({
      type: FETCH_MOVIE_FAILURE,
      error: error.message
    });
  }
}

export function *watchMovieRequest() {
  yield takeEvery(FETCH_MOVIE_REQUEST, movieRequest);
}

function *loadMovie(action) {
  const {id} = action.payload;

  const movie = yield select(store => store.entities.movies[id]);

  if (!movie) {
    yield put(fetchMovie(id))
  }
}

export function *watchLoadMovie() {
  yield takeEvery(LOAD_MOVIE, loadMovie);
}
