import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize } from 'normalizr';
import * as schema from '../../app/schema';

export const fetchMovieRecommendations = createAsyncThunk(
  'movieRecommendations/fetchMovieRecommendations',
  async (id) => {
    const data = await api.getMovieRecommendations(id);

    return {
      ...normalize(data, schema.paginatedListOfMovies),
      id,
    };
  }
);

const initialState = {
  itemsById: {},
  isFetching: false,
  isError: false,
};

const movieRecommendationsSlice = createSlice({
  name: 'movieRecommendations',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieRecommendations.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
      const movieId = action.payload.id;
      const existentRecommendations = state.itemsById[movieId] || [];

      state.isFetching = false;
      state.isError = false;
      state.itemsById = {
        ...state.itemsById,
        [movieId]: [
          ...existentRecommendations,
          ...action.payload.result.results.filter(
            (id) => !existentRecommendations.includes(id)
          ),
        ],
      };
    });

    builder.addCase(fetchMovieRecommendations.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default movieRecommendationsSlice.reducer;
