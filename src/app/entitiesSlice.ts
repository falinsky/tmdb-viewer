import { createSlice } from '@reduxjs/toolkit';
import merge from 'lodash/merge';
import { fetchPopularMovies } from '../features/popular-movies/popularMoviesSlice';
import { searchMovies } from '../features/search-movies/searchMoviesSlice';
import fetchMovieDetails from '../features/movie-details/movieDetailsThunk';
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

    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      // FIXME: items returned by movie details contain more data than returned in movies lists - so check if it needs to use a separate state to store such movie details.
      state.movies = merge(state.movies, action.payload.entities.movies);
    });
  },
});

export default entitiesSlice.reducer;
