import {combineReducers} from 'redux';
import popularMovies from './popularMovies';
import genres from './genres';
import entities from './entities';
import movieRecommendations from './movieRecommendations';
import favorites from './favorites';

export default combineReducers({
  popularMovies,
  genres,
  entities,
  movieRecommendations,
  favorites,
});