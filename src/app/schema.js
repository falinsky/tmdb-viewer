import { schema } from 'normalizr';

const genreSchema = new schema.Entity('genres');
export const genresArraySchema = new schema.Array(genreSchema);

export const movieSchema = new schema.Entity(
  'movies',
  { genres: genresArraySchema },
  {
    processStrategy: (value) => {
      // movies lists and separate movie details apis return related genres data
      // in different for, so try to normalize them.
      return {
        genres: value.genre_ids,
        ...value,
        genre_ids: undefined,
      };
    },
  }
);

export const paginatedMoviesListSchema = {
  results: new schema.Array(movieSchema),
};
