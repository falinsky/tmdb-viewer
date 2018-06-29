import React from 'react';
import PropTypes from 'prop-types';

function Genre({genre}) {
  return (
    <span>{genre ? genre.name : '...'}</span>
  );
}

Genre.propTypes = {
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Genre;