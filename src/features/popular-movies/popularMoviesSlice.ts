import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize, NormalizedSchema } from 'normalizr';
import {
  NormalizedMovies,
  NormalizedPaginatedListOfMovies,
  paginatedMoviesListSchema,
} from '../../app/schema';
import { MovieID } from '../../app/types';
import { RootState } from '../../app/store';

export const fetchPopularMovies = createAsyncThunk<
  NormalizedSchema<NormalizedMovies, NormalizedPaginatedListOfMovies>,
  void,
  { state: RootState }
>('popularMovies/fetchPopularMovies', async (_, { getState }) => {
  const {
    popularMovies: { page },
  } = getState();

  const data = await api.getPopularMovies(page + 1);

  return normalize(data, paginatedMoviesListSchema);
});

interface PopularMoviesState {
  items: MovieID[];
  isFetching: boolean;
  isError: boolean;
  allFetched: boolean;
  page: number;
}

const initialState: PopularMoviesState = {
  items: [],
  isFetching: false,
  isError: false,
  allFetched: false,
  page: 0,
};

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
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
