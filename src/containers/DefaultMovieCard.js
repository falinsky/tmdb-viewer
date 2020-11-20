import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const DefaultMovieCard = ({ movieId, ...otherProps }) => {
  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <MovieCard movie={movie} {...otherProps} />;
};

DefaultMovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default DefaultMovieCard;
