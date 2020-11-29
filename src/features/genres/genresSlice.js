import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize } from 'normalizr';
import * as schema from '../../app/schema';

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const { genres } = await api.getGenresListForMovies();

  return normalize(genres, schema.arrayOfGenres);
});

const initialState = {
  items: [],
  isFetching: false,
  isError: false,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
    });

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isError = false;
      state.items = action.payload.result;
    });

    builder.addCase(fetchGenres.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default genresSlice.reducer;
