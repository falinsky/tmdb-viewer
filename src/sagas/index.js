import { all } from 'redux-saga/effects';
import { watchMovieRecommendationsRequest } from './movieRecommendations';
import { watchSearchMoviesRequest } from './searchMovies';
import { watchMovieRequest } from './movie';

export default function* rootSaga() {
  yield all([
    watchMovieRecommendationsRequest(),
    watchSearchMoviesRequest(),
    watchMovieRequest(),
  ]);
}
