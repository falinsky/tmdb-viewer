import { schema } from 'normalizr';
import { Genre, Movie, MovieID } from '../tmdb-api/types';

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

export interface NormalizedMovies {
  movies: { [id: number]: Movie };
}

export interface NormalizedGenres {
  genres: { [id: number]: Genre };
}

export interface NormalizedPaginatedListOfMovies {
  results: MovieID[];
  page: number;
  total_pages: number;
  total_results: number;
}
