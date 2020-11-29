import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleLineMoviesList from '../../app/SingleLineMoviesList';
import { fetchMovieRecommendations } from './movieRecommendationsSlice';

const MovieRecommendations = ({ movieId, title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieRecommendations(movieId));
  }, [movieId, dispatch]);

  const movieIds = useSelector(
    (state) => state.movieRecommendations.itemsById[movieId]
  );

  return <SingleLineMoviesList movieIds={movieIds} title={title} />;
};

MovieRecommendations.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string,
};

export default MovieRecommendations;
