import React from 'react';
import SingleLineMoviesList from '../../app/SingleLineMoviesList';
import { MovieID } from '../../tmdb-api/types';
import { useQuery } from 'react-query';
import { getMovieRecommendations } from '../../tmdb-api/api';

interface MovieRecommendationsProps {
  movieId: MovieID;
  title: string;
}

const MovieRecommendations = ({
  movieId,
  title,
}: MovieRecommendationsProps) => {
  const { data } = useQuery(['movieRecommendations', movieId], () =>
    getMovieRecommendations(movieId)
  );

  return <SingleLineMoviesList movies={data?.results} title={title} />;
};

export default MovieRecommendations;
