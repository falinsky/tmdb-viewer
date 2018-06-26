import {
  FETCH_POPULAR_MOVIES_SUCCESS,
} from '../actions';

const defaultState = {
  movies: {},
};

export default function entities(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          ...action.payload.entities.movies,
        },
      };

    default:
      return state;
  }
}
