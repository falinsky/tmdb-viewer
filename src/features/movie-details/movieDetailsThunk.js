import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize } from 'normalizr';
import { movieSchema } from '../../app/schema';

const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async (id) => {
    const data = await api.getMovie(id);

    return normalize(data, movieSchema);
  }
);

export default fetchMovieDetails;
