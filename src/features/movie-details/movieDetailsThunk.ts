import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../tmdb-api/api';
import { normalize, NormalizedSchema } from 'normalizr';
import {
  NormalizedGenres,
  NormalizedMovies,
  movieSchema,
} from '../../app/schema';
import { MovieID } from '../../tmdb-api/types';

const fetchMovieDetails = createAsyncThunk<
  NormalizedSchema<NormalizedMovies & NormalizedGenres, MovieID>,
  MovieID
>('movieDetails/fetchMovieDetails', async (id) => {
  const data = await api.getMovie(id);

  return normalize(data, movieSchema);
});

export default fetchMovieDetails;
