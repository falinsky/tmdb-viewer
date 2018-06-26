import {combineReducers} from 'redux';
import popularMovies from './popularMovies';
import genres from './genres';
import entities from './entities';

export default combineReducers({
  popularMovies,
  genres,
  entities,
});