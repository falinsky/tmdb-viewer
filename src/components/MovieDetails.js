import React from 'react';
import PropTypes from 'prop-types';
import {getMoviePosterImageUrl} from '../api';
import MovieRecommendations from '../containers/MovieRecommendations';
import FavoriteBadge from '../containers/FavoriteBadge';
import './MovieDetails.css';

function MovieDetails({movie}) {
  return (
    <article>
      {!movie ? 'Loading movie info...' : (
        <React.Fragment>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img src={getMoviePosterImageUrl(movie.backdrop_path)} alt={movie.title} />
          <FavoriteBadge movie={movie.id} />
          <section className="MovieRecommendations">
            <h2>Recommendations</h2>
            <MovieRecommendations movie={movie.id} />
          </section>
        </React.Fragment>
      )}
    </article>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;