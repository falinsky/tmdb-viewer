export const FETCH_POPULAR_MOVIES_REQUEST = 'FETCH_POPULAR_MOVIES_REQUEST';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE';

export const fetchPopularMovies = (page) => ({
  type: FETCH_POPULAR_MOVIES_REQUEST,
  payload: {
    page,
  },
});

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMovie = (id) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: {
    id,
  },
});

export const LOAD_MOVIE = 'LOAD_MOVIE';

export const loadMovie = (id) => ({
  type: LOAD_MOVIE,
  payload: {
    id,
  },
});

export const FETCH_MOVIE_RECOMMENDATIONS_REQUEST = 'FETCH_MOVIE_RECOMMENDATIONS_REQUEST';
export const FETCH_MOVIE_RECOMMENDATIONS_SUCCESS = 'FETCH_MOVIE_RECOMMENDATIONS_SUCCESS';
export const FETCH_MOVIE_RECOMMENDATIONS_FAILURE = 'FETCH_MOVIE_RECOMMENDATIONS_FAILURE';

export const fetchMovieRecommendations = (id) => ({
  type: FETCH_MOVIE_RECOMMENDATIONS_REQUEST,
  payload: {
    id,
  },
});

export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const fetchGenres = () => ({
  type: FETCH_GENRES_REQUEST,
});

export const FAVORITES_ADD_MOVIE = 'FAVORITES_ADD_MOVIE';
export const FAVORITES_REMOVE_MOVIE = 'FAVORITES_REMOVE_MOVIE';

export const addMovieToFavorites = (id) => ({
  type: FAVORITES_ADD_MOVIE,
  payload: id,
});

export const removeMovieFromFavorites = (id) => ({
  type: FAVORITES_REMOVE_MOVIE,
  payload: id,
});

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMovies = (query, page) => ({
  type: SEARCH_MOVIES_REQUEST,
  payload: {
    query,
    page,
  },
});

export const SEARCH_MOVIES_UPDATE_QUERY = 'SEARCH_MOVIES_UPDATE_QUERY';

export const updateSearchMoviesQuery = (value) => ({
  type: SEARCH_MOVIES_UPDATE_QUERY,
  payload: value,
});

export const SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH = 'SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH';

export const prepareForNewSearchMovies = () => ({
  type: SEARCH_MOVIES_PREPARE_FOR_NEW_SEARCH,
});

export const SEARCH_MOVIES_START_NEW_SEARCH = 'SEARCH_MOVIES_START_NEW_SEARCH';

export const startNewSearchMovies = (value, history) => ({
  type: SEARCH_MOVIES_START_NEW_SEARCH,
  payload: {
    value,
    history,
  },
});