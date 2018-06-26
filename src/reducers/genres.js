import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE
} from '../actions';

const defaultState = {
  items: [],
  isFetching: false,
  isError: false,
};

export default function genres(state = defaultState, action) {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };

    case FETCH_GENRES_SUCCESS:
      return {
        isFetching: false,
        isError: false,
        items: action.payload.result,
      };

    case FETCH_GENRES_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };

    default:
      return state;
  }
}
