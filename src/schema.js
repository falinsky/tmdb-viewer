import {schema} from 'normalizr';

const genre = new schema.Entity('genres');
export const arrayOfGenres = new schema.Array(genre);

export const movie = new schema.Entity('movies', { genres: arrayOfGenres }, {
  processStrategy: (value) => {
    // movies lists and separate movie details apis return related genres data 
    // in different for, so try to normalize them.
    return {
      genres: value.genre_ids,
      ...value,
      genre_ids: undefined,
    };
  },
});

const arrayOfMovies = new schema.Array(movie);

export const paginatedListOfMovies = {
  results: arrayOfMovies,
};