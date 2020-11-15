import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import { loadMovie } from '../actions';

const MovieDetailsContainer = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovie(id));
  }, [id, dispatch]);

  const movie = useSelector((state) => state.entities.movies[id]);

  return <MovieDetails movie={movie} />;
};

MovieDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetailsContainer;
