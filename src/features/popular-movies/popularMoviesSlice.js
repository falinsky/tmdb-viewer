import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize } from 'normalizr';
import * as schema from '../../app/schema';

export const fetchPopularMovies = createAsyncThunk(
  'popularMovies/fetchPopularMovies',
  async (_, { getState }) => {
    const {
      popularMovies: { page },
    } = getState();

    const data = await api.getPopularMovies(page + 1);

    return normalize(data, schema.paginatedListOfMovies);
  }
);

const initialState = {
  items: [],
  isFetching: false,
  isError: false,
  allFetched: false,
  page: 0,
};

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      const { result } = action.payload;

      state.isFetching = false;
      state.isError = false;
      state.items = [
        ...state.items,
        ...result.results.filter((id) => !state.items.includes(id)),
      ];
      state.allFetched = state.allFetched || result.page >= result.total_pages;
      state.page = Math.max(state.page, result.page);
    });

    builder.addCase(fetchPopularMovies.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default popularMoviesSlice.reducer;
