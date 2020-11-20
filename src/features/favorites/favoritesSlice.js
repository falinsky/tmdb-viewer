import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeMovie(state, action) {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
