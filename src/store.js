import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';

const initialState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites,
  });
});

export default store;
