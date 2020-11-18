import { all } from 'redux-saga/effects';
import { watchPopularMoviesRequest } from './popularMovies';
import { watchMovieRecommendationsRequest } from './movieRecommendations';
import { watchGenresRequest } from './genres';
import { watchSearchMoviesRequest } from './searchMovies';
import { watchMovieRequest } from './movie';

export default function* rootSaga() {
  yield all([
    watchPopularMoviesRequest(),
    watchMovieRecommendationsRequest(),
    watchGenresRequest(),
    watchSearchMoviesRequest(),
    watchMovieRequest(),
  ]);
}
