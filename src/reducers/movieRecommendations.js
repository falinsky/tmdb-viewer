import {
  FETCH_MOVIE_RECOMMENDATIONS_REQUEST,
  FETCH_MOVIE_RECOMMENDATIONS_SUCCESS,
  FETCH_MOVIE_RECOMMENDATIONS_FAILURE
} from '../actions';

const defaultState = {
  itemsById: {},
  isFetching: false,
  isError: false,
};

export default function movieRecommendations(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MOVIE_RECOMMENDATIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };

    case FETCH_MOVIE_RECOMMENDATIONS_SUCCESS:
      const movieId = action.payload.id;
      const existentRecommendations = state.itemsById[movieId] || [];

      return {
        isFetching: false,
        isError: false,
        itemsById: {
          ...state.itemsById,
          [movieId]: [
            ...existentRecommendations,
            ...action.payload.result.results.filter(id => !existentRecommendations.includes(id)),
          ],
        }
      };

    case FETCH_MOVIE_RECOMMENDATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };

    default:
      return state;
  }
}

