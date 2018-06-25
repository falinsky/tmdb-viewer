import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE
} from '../actions';

const defaultState = {
  items: [],
  isFetching: false,
  isError: false,
};

export default function popularMovies(state = defaultState, action) {
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
        items: [
          ...state.items,
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
