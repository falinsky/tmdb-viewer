import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieID } from '../../tmdb-api/types';

export type FavoritesState = MovieID[];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as FavoritesState,
  reducers: {
    addMovie(state, action: PayloadAction<MovieID>) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeMovie(state, action: PayloadAction<MovieID>) {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
