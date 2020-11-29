import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SingleLineMoviesListItem from './SingleLineMoviesListItem';

const SingleLineMoviesListDefaultItem = ({ movieId, ...otherProps }) => {
  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <SingleLineMoviesListItem movie={movie} {...otherProps} />;
};

SingleLineMoviesListDefaultItem.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default SingleLineMoviesListDefaultItem;
