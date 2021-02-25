import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleLineMoviesList from '../../app/SingleLineMoviesList';
import { fetchMovieRecommendations } from './movieRecommendationsSlice';
import { MovieID } from '../../tmdb-api/types';
import { RootState } from '../../app/store';

interface MovieRecommendationsProps {
  movieId: MovieID;
  title: string;
}

const MovieRecommendations = ({
  movieId,
  title,
}: MovieRecommendationsProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieRecommendations(movieId));
  }, [movieId, dispatch]);

  const movieIds = useSelector(
    (state: RootState) => state.movieRecommendations.itemsById[movieId]
  );

  return <SingleLineMoviesList movieIds={movieIds} title={title} />;
};

export default MovieRecommendations;
