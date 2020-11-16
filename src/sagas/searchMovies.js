import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as api from '../api';
import {
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
} from '../actions';
import { normalize } from 'normalizr';
import * as schema from '../schema';

function* searchMoviesRequest(action) {
  const { query } = action.payload;

  try {
    const page =
      action.payload.page ||
      (yield select((store) => store.searchMovies.page)) + 1;
    const data = yield call(api.searchMovies, query, page);

    yield put({
      type: SEARCH_MOVIES_SUCCESS,
      payload: {
        ...normalize(data, schema.paginatedListOfMovies),
        query,
      },
    });
  } catch (error) {
    yield put({
      type: SEARCH_MOVIES_FAILURE,
      error: error.message,
    });
  }
}

export function* watchSearchMoviesRequest() {
  yield takeEvery(SEARCH_MOVIES_REQUEST, searchMoviesRequest);
}
