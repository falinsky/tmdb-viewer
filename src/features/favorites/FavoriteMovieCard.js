import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../app/MovieCard';
import fetchMovieDetails from '../movie-details/movieDetailsThunk';

const FavoriteMovieCard = ({ movieId }) => {
  const movie = useSelector((state) => state.entities.movies[movieId]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovieDetails(movieId));
    }
  }, [movieId, dispatch, movie]);

  return <MovieCard movie={movie} />;
};

FavoriteMovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default FavoriteMovieCard;
