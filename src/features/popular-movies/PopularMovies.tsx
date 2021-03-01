import React from 'react';
import InfiniteMoviesList from '../../app/InfiniteMoviesList';
import { useInfiniteQuery } from 'react-query';
import { getPopularMovies } from '../../tmdb-api/api';
import { MovieListResultItem } from '../../tmdb-api/types';
import MovieCard from '../../app/MovieCard';

const PopularMovies = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['popularMovies'],
    ({ pageParam = 1 }) => getPopularMovies(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
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

export default PopularMovies;
