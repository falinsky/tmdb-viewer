import React from 'react';
import { useSelector } from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';

const FavoriteMovies = () => {
  const movieIds = useSelector((state) => state.favorites);

  return <InfiniteMoviesList movieIds={movieIds} />;
};

export default FavoriteMovies;
