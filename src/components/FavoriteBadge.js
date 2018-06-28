import React from 'react';

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

export default FavoriteBadge;