import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import MovieCard from '../containers/MovieCard';
import './InfiniteMoviesList.css';

function InfiniteMoviesList({movies, fetchMovies, hasMore}) {
  return (
    <InfiniteScroll
      className="InfiniteMoviesList"
      element="ul"
      hasMore={hasMore}
      loadMore={fetchMovies}
    >
      {movies.map(id => (
        <li className="InfiniteMoviesList-Item" key={id}>
          <MovieCard id={id} />
        </li>
      ))}

      {!movies.length && !hasMore && <li>No movies found</li>}
    </InfiniteScroll>
  );
}

InfiniteMoviesList.defaultProps = {
  movies: [],
};

InfiniteMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  fetchMovies: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired
};

export default InfiniteMoviesList;