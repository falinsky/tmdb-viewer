import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';
import { normalize } from 'normalizr';
import * as schema from '../../schema';

const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async (id) => {
    const data = await api.getMovie(id);

    return normalize(data, schema.movie);
  }
);

export default fetchMovieDetails;
