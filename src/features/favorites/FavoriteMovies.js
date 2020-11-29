import React from 'react';
import { useSelector } from 'react-redux';
import InfiniteMoviesList from '../../app/InfiniteMoviesList';
import FavoriteMovieCard from './FavoriteMovieCard';

const FavoriteMovies = () => {
  const movieIds = useSelector((state) => state.favorites);

  return (
    <InfiniteMoviesList
      movieIds={movieIds}
      itemComponentType={FavoriteMovieCard}
    />
  );
};

export default FavoriteMovies;
