import React from 'react';
import PropTypes from 'prop-types';
import './SearchMovies.css';

function SearchMovies({query, onChange, onSubmit}) {
  return (
    <section className="SearchMovies">
      <form onSubmit={(event) => {
        event.preventDefault();
        if (query.trim()) {
          onSubmit(query);
        }
      }}>
        <label htmlFor="SearchMovies-SearchValue">
          Search
        </label>

        <input id="SearchMovies-SearchValue" value={query} onChange={(event) => onChange(event.target.value)} />
      </form>
    </section>
  );
}

SearchMovies.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;