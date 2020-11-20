import { all } from 'redux-saga/effects';
import { watchMovieRequest } from './movie';

export default function* rootSaga() {
  yield all([watchMovieRequest()]);
}
