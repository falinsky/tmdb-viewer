import { all } from 'redux-saga/effects';
import { watchMovieRecommendationsRequest } from './movieRecommendations';
import { watchGenresRequest } from './genres';
import { watchSearchMoviesRequest } from './searchMovies';
import { watchMovieRequest } from './movie';

export default function* rootSaga() {
  yield all([
    watchMovieRecommendationsRequest(),
    watchGenresRequest(),
    watchSearchMoviesRequest(),
    watchMovieRequest(),
  ]);
}
