import { createSlice } from '@reduxjs/toolkit';
import merge from 'lodash/merge';
import { fetchPopularMovies } from '../features/popular-movies/popularMoviesSlice';
import { fetchMovieRecommendations } from '../features/movie-recommendations/movieRecommendationsSlice';
import { searchMovies } from '../features/search-movies/searchMoviesSlice';
import fetchMovieDetails from '../features/movie-details/movieDetailsThunk';
import { fetchGenres } from '../features/genres/genresSlice';
import { NormalizedGenres, NormalizedMovies } from './schema';

type EntitiesState = NormalizedMovies & NormalizedGenres;

const initialState: EntitiesState = {
  movies: {},
  genres: {},
};

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.movies = merge(state.movies, action.payload.entities.movies);
    });

    builder.addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
      state.movies = merge(state.movies, action.payload.entities.movies);
    });

    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.movies = merge(state.movies, action.payload.entities.movies);
    });

    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      // FIXME: items returned by movie details contain more data than returned in movies lists - so check if it needs to use a separate state to store such movie details.
      state.movies = merge(state.movies, action.payload.entities.movies);
      state.genres = merge(state.genres, action.payload.entities.genres);
    });

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = merge(state.genres, action.payload.entities.genres);
    });
  },
});

export default entitiesSlice.reducer;
