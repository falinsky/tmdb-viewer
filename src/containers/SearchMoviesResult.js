import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';
import { searchMovies } from '../actions';

const SearchMoviesResult = () => {
  const movieIds = useSelector((state) => state.searchMovies.items);
  const hasMore = useSelector(
    (state) => !state.searchMovies.allFetched && state.searchMovies.query !== ''
  );
  const isFetching = useSelector((state) => state.searchMovies.isFetching);
  const reset = useSelector((state) => state.searchMovies.reset);
  const query = useSelector((state) => state.searchMovies.query);
  const dispatch = useDispatch();

  return (
    <InfiniteMoviesList
      movieIds={movieIds}
      hasMore={hasMore}
      isFetching={isFetching}
      reset={reset}
      fetchMovies={(page) => {
        dispatch(searchMovies(query, page));
      }}
    />
  );
};

export default SearchMoviesResult;
