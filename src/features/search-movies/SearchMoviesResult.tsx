import React from 'react';
import { useSelector } from 'react-redux';
import InfiniteMoviesList from '../../app/InfiniteMoviesList';
import { RootState } from '../../app/store';
import { useInfiniteQuery } from 'react-query';
import { searchMovies } from '../../tmdb-api/api';
import { MovieListResultItem } from '../../tmdb-api/types';
import MovieCard from '../../app/MovieCard';

const SearchMoviesResult = () => {
  const query = useSelector((state: RootState) => state.searchMovies.query);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['searchMovies', query],
    ({ pageParam = 1 }) => searchMovies(query, pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
      enabled: query !== '',
    }
  );

  const movies = data?.pages.reduce<MovieListResultItem[]>(
    (result, page) => result.concat(page.results),
    []
  );

  return (
    <InfiniteMoviesList
      items={movies}
      hasMore={hasNextPage}
      isFetching={isFetchingNextPage}
      fetchItems={fetchNextPage}
    >
      {(movie) => <MovieCard movie={movie} />}
    </InfiniteMoviesList>
  );
};

export default SearchMoviesResult;
