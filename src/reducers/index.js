import {combineReducers} from 'redux';
import popularMovies from './popularMovies';
import genres from './genres';

export default combineReducers({
  popularMovies,
  genres,
});