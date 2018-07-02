import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovies.css';

function SearchMovies({query, searchMovies}) {
  return (
    <section className="SearchMovies">
      <label htmlFor="SearchMovies-SearchValue">
        Search
      </label>

      <input id="SearchMovies-SearchValue" value={query} onChange={(event) => searchMovies(event.target.value)} />
    </section>
  );
}

SearchMovies.propTypes = {
  query: PropTypes.string,
  searchMovies: PropTypes.func.isRequired,
};

export default SearchMovies;