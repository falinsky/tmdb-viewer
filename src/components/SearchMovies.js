import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovies.css';

function SearchMovies({search, onChange}) {
  return (
    <section className="SearchMovies">
      <label htmlFor="SearchMovies-SearchValue">
        Search
      </label>

      <input id="SearchMovies-SearchValue" value={search} onChange={onChange} />
    </section>
  );
}

SearchMovies.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SearchMovies;