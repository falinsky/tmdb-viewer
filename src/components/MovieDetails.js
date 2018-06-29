import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getMoviePosterImageUrl} from '../api';
import MovieRecommendations from '../containers/MovieRecommendations';
import FavoriteBadge from '../containers/FavoriteBadge';
import './MovieDetails.css';

function MovieDetails({movie}) {
  return (
    <React.Fragment>
      {!movie ? 'Loading movie info...' : (
        <React.Fragment>
          <main>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={getMoviePosterImageUrl(movie.backdrop_path)} alt={movie.title} />
            <FavoriteBadge movie={movie.id} />
          </main>
          <section className="MovieRecommendations">
            <h2>Recommendations</h2>
            <MovieRecommendations movie={movie.id} />
          </section>
        </React.Fragment>
      )}
      <footer>
        <Link to="/">Return to main page</Link>
      </footer>
    </React.Fragment>
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