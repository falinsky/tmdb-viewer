import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import MovieCard from '../containers/MovieCard';
import './InfiniteMoviesList.css';

function InfiniteMoviesList({movies, fetchMovies, hasMore, uniqueKey}) {
  return (
    <InfiniteScroll
      key={uniqueKey}
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
  hasMore: PropTypes.bool.isRequired,
  // uniqueKey param is needed to completely remount InfiniteScroll component
  // it's needed to make it possible to start new searches with page 1 passed
  uniqueKey: PropTypes.string,
};

export default InfiniteMoviesList;