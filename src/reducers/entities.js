import {
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_GENRES_SUCCESS,
} from '../actions';

const defaultState = {
  movies: {},
  genres: {},
};

export default function entities(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_SUCCESS:
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          ...action.payload.entities.movies,
        },
      };

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload.entities.genres,
      };

    default:
      return state;
  }
}
