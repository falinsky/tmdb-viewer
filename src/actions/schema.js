import {schema} from 'normalizr';

const movie = new schema.Entity('movies');
export const arrayOfMovies = new schema.Array(movie);

const genre = new schema.Entity('genres');
export const arrayOfGenres = new schema.Array(genre);