import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const DefaultMovieCard = ({ movieId }) => {
  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <MovieCard movie={movie} />;
};

DefaultMovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default DefaultMovieCard;
