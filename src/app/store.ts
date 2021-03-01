import { configureStore } from '@reduxjs/toolkit';
import { createLocalStorageWrapper } from './localStorage';
import entitiesReducer from './entitiesSlice';
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
    entities: entitiesReducer,
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
