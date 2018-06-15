import React from 'react';

function Genre({genre}) {
  return (
    <span>{genre ? genre.name : '...'}</span>
  );
}

export default Genre;