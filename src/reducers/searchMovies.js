import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_MOVIES_UPDATE_QUERY,
  SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH,
} from '../actions';

const defaultState = {
  items: [],
  query: '',
  isFetching: false,
  isError: false,
  allFetched: false,
  page: 0,
  reset: false,
};

export default function searchMovies(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        items: [
          ...state.items,
          ...action.payload.result.results.filter(id => !state.items.includes(id)),
        ],
        allFetched: state.allFetched || action.payload.result.page >= action.payload.result.total_pages,
        page: Math.max(state.page, action.payload.result.page),
      };

    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };

    case SEARCH_MOVIES_UPDATE_QUERY:
      return {
        ...state,
        query: action.payload,
        reset: false,
      };

    case SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH:
      return {
        ...defaultState,
        query: state.query,
        reset: true,
      };

    default:
      return state;
  }
}
