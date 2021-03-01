import React from 'react';
import MovieCard from '../../app/MovieCard';
import { MovieID } from '../../tmdb-api/types';
import useMovieDetails from '../../app/useMovieDetails';

interface FavoriteMovieCardProps {
  movieId: MovieID;
}

const FavoriteMovieCard = ({ movieId }: FavoriteMovieCardProps) => {
  const { data: movie } = useMovieDetails(movieId);

  return <MovieCard movie={movie} />;
};

export default FavoriteMovieCard;
