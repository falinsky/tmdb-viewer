import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SingleLineMoviesListItem from '../components/SingleLineMoviesListItem';

const SingleLineMoviesListItemContainer = ({ movieId, ...otherProps }) => {
  const movie = useSelector((state) => state.entities.movies[movieId]);

  return <SingleLineMoviesListItem movie={movie} {...otherProps} />;
};

SingleLineMoviesListItemContainer.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default SingleLineMoviesListItemContainer;
