import { useQuery } from 'react-query';
import { getMovie } from '../tmdb-api/api';
import { MovieID } from '../tmdb-api/types';

export default function useMovieDetails(id: MovieID) {
  return useQuery(['movieDetails', id], () => getMovie(id));
}
