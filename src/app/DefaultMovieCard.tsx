import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { MovieID } from '../tmdb-api/types';
import { RootState } from './store';

interface DefaultMovieCardProps {
  movieId: MovieID;
}

const DefaultMovieCard = ({ movieId }: DefaultMovieCardProps) => {
  const movie = useSelector(
    (state: RootState) => state.entities.movies[movieId]
  );

  return <MovieCard movie={movie} />;
};

export default DefaultMovieCard;
