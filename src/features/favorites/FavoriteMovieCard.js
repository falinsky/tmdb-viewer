import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../app/MovieCard';
import fetchMovieDetails from '../movie-details/movieDetailsThunk';

const FavoriteMovieCard = ({ movieId, ...otherProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [movieId, dispatch]);

  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <MovieCard movie={movie} {...otherProps} />;
};

FavoriteMovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default FavoriteMovieCard;
