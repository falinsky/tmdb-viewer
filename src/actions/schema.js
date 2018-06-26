import {schema} from 'normalizr';

const movie = new schema.Entity('movies');
export const arrayOfMovies = new schema.Array(movie);