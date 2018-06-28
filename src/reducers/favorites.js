import {FAVORITES_ADD_MOVIE, FAVORITES_REMOVE_MOVIE} from '../actions';

export default function favorites(state = [], action) {
  switch(action.type) {
    case FAVORITES_ADD_MOVIE:
      return !state.includes(action.payload) ? state.concat(action.payload) : state;

    case FAVORITES_REMOVE_MOVIE:
      return state.filter(id => id !== action.payload);

    default:
      return state;
  }
}