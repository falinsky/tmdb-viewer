import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../app/MovieCard';
import fetchMovieDetails from '../movie-details/movieDetailsThunk';
import { MovieID } from '../../app/types';
import { RootState } from '../../app/store';

interface FavoriteMovieCardProps {
  movieId: MovieID;
}

const FavoriteMovieCard = ({ movieId }: FavoriteMovieCardProps) => {
  const movie = useSelector(
    (state: RootState) => state.entities.movies[movieId]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovieDetails(movieId));
    }
  }, [movieId, dispatch, movie]);

  return <MovieCard movie={movie} />;
};

export default FavoriteMovieCard;
