import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const MovieCardContainer = ({ movieId, ...otherProps }) => {
  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <MovieCard movie={movie} {...otherProps} />;
};

MovieCardContainer.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCardContainer;
