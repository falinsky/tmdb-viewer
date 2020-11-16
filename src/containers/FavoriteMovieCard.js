import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { loadMovie } from '../actions';

const FavoriteMovieCard = ({ movieId, ...otherProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovie(movieId));
  }, [movieId, dispatch]);

  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <MovieCard movie={movie} {...otherProps} />;
};

FavoriteMovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default FavoriteMovieCard;
