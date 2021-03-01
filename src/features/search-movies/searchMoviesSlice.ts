import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchMoviesState {
  query: string;
}

const initialState: SearchMoviesState = {
  query: '',
};

const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    prepareForNewSearch(state, action: PayloadAction<string>) {
      return {
        ...initialState,
        query: action.payload,
      };
    },
  },
});

export const { prepareForNewSearch } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
