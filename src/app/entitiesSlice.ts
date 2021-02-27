import { createSlice } from '@reduxjs/toolkit';
import merge from 'lodash/merge';
import { fetchPopularMovies } from '../features/popular-movies/popularMoviesSlice';
import { searchMovies } from '../features/search-movies/searchMoviesSlice';
import { NormalizedMovies } from './schema';

type EntitiesState = NormalizedMovies;

const initialState: EntitiesState = {
  movies: {},
};

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.movies = merge(state.movies, action.payload.entities.movies);
    });

    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.movies = merge(state.movies, action.payload.entities.movies);
    });
  },
});

export default entitiesSlice.reducer;
