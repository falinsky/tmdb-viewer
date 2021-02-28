import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteMoviesList from '../../app/InfiniteMoviesList';
import { fetchPopularMovies } from './popularMoviesSlice';
import { RootState } from '../../app/store';
import DefaultMovieCard from '../../app/DefaultMovieCard';

const PopularMovies = () => {
  const movieIds = useSelector((state: RootState) => state.popularMovies.items);
  const hasMore = useSelector(
    (state: RootState) => !state.popularMovies.allFetched
  );
  const isFetching = useSelector(
    (state: RootState) => state.popularMovies.isFetching
  );
  const dispatch = useDispatch();

  return (
    <InfiniteMoviesList
      movieIds={movieIds}
      hasMore={hasMore}
      isFetching={isFetching}
      fetchMovies={() => {
        dispatch(fetchPopularMovies());
      }}
    >
      {(movieId) => <DefaultMovieCard movieId={movieId} />}
    </InfiniteMoviesList>
  );
};

export default PopularMovies;
