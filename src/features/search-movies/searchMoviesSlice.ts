import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../../tmdb-api/api';
import { normalize, NormalizedSchema } from 'normalizr';
import {
  NormalizedMovies,
  NormalizedPaginatedListOfMovies,
  paginatedMoviesListSchema,
} from '../../app/schema';
import { MovieID } from '../../tmdb-api/types';
import { RootState } from '../../app/store';

export const searchMovies = createAsyncThunk<
  NormalizedSchema<NormalizedMovies, NormalizedPaginatedListOfMovies> & {
    query: string;
  },
  void,
  { state: RootState }
>('searchMovies/searchMovies', async (_, { getState }) => {
  const {
    searchMovies: { page, query },
  } = getState();

  const data = await api.searchMovies(query, page + 1);

  return {
    ...normalize(data, paginatedMoviesListSchema),
    query,
  };
});

interface SearchMoviesState {
  items: MovieID[];
  isFetching: boolean;
  isError: boolean;
  allFetched: boolean;
  page: number;
  query: string;
  reset: boolean;
}

const initialState: SearchMoviesState = {
  items: [],
  query: '',
  isFetching: false,
  isError: false,
  allFetched: false,
  page: 0,
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
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
      state.reset = false;
    });

    builder.addCase(searchMovies.fulfilled, (state, action) => {
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

    builder.addCase(searchMovies.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export const { prepareForNewSearch } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
