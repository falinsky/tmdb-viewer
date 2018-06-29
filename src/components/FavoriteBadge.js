import React from 'react';
import PropTypes from 'prop-types';

function FavoriteBadge({inFavorites, onAdd, onRemove}) {
  return (
    <button onClick={(e) => {
        e.preventDefault();
        return inFavorites ? onRemove() : onAdd();
    }}>
      {`${inFavorites ? 'Remove from' : 'Add to'} Favorites`}
    </button>
  );
};

FavoriteBadge.propTypes = {
  inFavorites: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FavoriteBadge;