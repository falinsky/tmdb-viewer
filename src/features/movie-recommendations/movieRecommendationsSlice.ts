import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize, NormalizedSchema } from 'normalizr';
import {
  NormalizedMovies,
  NormalizedPaginatedListOfMovies,
  paginatedMoviesListSchema,
} from '../../app/schema';
import { MovieID } from '../../app/types';

export const fetchMovieRecommendations = createAsyncThunk<
  NormalizedSchema<NormalizedMovies, NormalizedPaginatedListOfMovies> & {
    id: MovieID;
  },
  MovieID
>('movieRecommendations/fetchMovieRecommendations', async (id) => {
  const data = await api.getMovieRecommendations(id);

  return {
    ...normalize(data, paginatedMoviesListSchema),
    id,
  };
});

interface MovieRecommendationsState {
  itemsById: { [id: number]: MovieID[] };
  isFetching: boolean;
  isError: boolean;
}

const initialState: MovieRecommendationsState = {
  itemsById: {},
  isFetching: false,
  isError: false,
};

const movieRecommendationsSlice = createSlice({
  name: 'movieRecommendations',
  initialState,
  reducers: {},
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
