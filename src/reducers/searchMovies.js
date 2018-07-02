import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE
} from '../actions';

const defaultState = {
  items: [],
  query: '',
  isFetching: false,
  isError: false,
};

export default function searchMovies(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        items: [],
        query: action.payload.query,
        isFetching: true,
        isError: false,
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        items: [
          ...action.payload.result.results
        ],
      };

    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };

    default:
      return state;
  }
}
