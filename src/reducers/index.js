import {combineReducers} from 'redux';
import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE
} from '../actions';

const defaultState = {
  results: [],
  isFetching: false,
  isError: false,
};

function popularMovies(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        isFetching: false,
        isError: false,
        results: [
          ...state.results,
          ...action.payload.results,
        ],
      };

    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };

    default:
      return state;
  }
}

export default combineReducers({
  popularMovies
});