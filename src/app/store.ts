import { configureStore } from '@reduxjs/toolkit';
import { createLocalStorageWrapper } from './localStorage';
import popularMoviesReducer from '../features/popular-movies/popularMoviesSlice';
import genresReducer from '../features/genres/genresSlice';
import entitiesReducer from './entitiesSlice';
import movieRecommendationsReducer from '../features/movie-recommendations/movieRecommendationsSlice';
import favoritesReducer, {
  FavoritesState,
} from '../features/favorites/favoritesSlice';
import searchMoviesReducer from '../features/search-movies/searchMoviesSlice';

const { loadState, saveState } = createLocalStorageWrapper<{
  favorites: FavoritesState;
}>('tmdb-viewer');

const initialState = loadState();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    genres: genresReducer,
    entities: entitiesReducer,
    movieRecommendations: movieRecommendationsReducer,
    favorites: favoritesReducer,
    searchMovies: searchMoviesReducer,
  },
  preloadedState: initialState,
});

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites,
  });
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
