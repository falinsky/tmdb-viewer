import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { normalize, NormalizedSchema } from 'normalizr';
import { genresArraySchema, NormalizedGenres } from '../../app/schema';
import { GenreID } from '../../app/types';

export const fetchGenres = createAsyncThunk<
  NormalizedSchema<NormalizedGenres, GenreID[]>
>('genres/fetchGenres', async () => {
  const { genres } = await api.getGenresListForMovies();

  return normalize(genres, genresArraySchema);
});

interface GenresState {
  items: GenreID[];
  isFetching: boolean;
  isError: boolean;
}

const initialState: GenresState = {
  items: [],
  isFetching: false,
  isError: false,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
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
