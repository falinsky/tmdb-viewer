import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteMoviesList from '../../components/InfiniteMoviesList';
import { fetchPopularMovies } from './popularMoviesSlice';

const PopularMovies = () => {
  const movieIds = useSelector((state) => state.popularMovies.items);
  const hasMore = useSelector((state) => !state.popularMovies.allFetched);
  const isFetching = useSelector((state) => state.popularMovies.isFetching);
  const dispatch = useDispatch();

  return (
    <InfiniteMoviesList
      movieIds={movieIds}
      hasMore={hasMore}
      isFetching={isFetching}
      fetchMovies={() => {
        dispatch(fetchPopularMovies());
      }}
    />
  );
};

export default PopularMovies;
