import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchMoviesState {
  query: string;
  reset: boolean;
}

const initialState: SearchMoviesState = {
  query: '',
  reset: false,
};

const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    prepareForNewSearch(state, action: PayloadAction<string>) {
      return {
        ...initialState,
        query: action.payload,
        reset: true,
      };
    },
  },
});

export const { prepareForNewSearch } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
