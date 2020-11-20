import { all } from 'redux-saga/effects';
import { watchSearchMoviesRequest } from './searchMovies';
import { watchMovieRequest } from './movie';

export default function* rootSaga() {
  yield all([watchSearchMoviesRequest(), watchMovieRequest()]);
}
