import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize } from 'normalizr';
import * as schema from '../../app/schema';

export const searchMovies = createAsyncThunk(
  'searchMovies/searchMovies',
  async (query, { getState }) => {
    const {
      searchMovies: { page },
    } = getState();

    const data = await api.searchMovies(query, page + 1);

    return {
      ...normalize(data, schema.paginatedListOfMovies),
      query,
    };
  }
);

const initialState = {
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
    updateQuery(state, action) {
      state.query = action.payload;
      state.reset = false;
    },
    prepareForNewSearch(state) {
      return {
        ...initialState,
        query: state.query,
        reset: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
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

export const { updateQuery, prepareForNewSearch } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
