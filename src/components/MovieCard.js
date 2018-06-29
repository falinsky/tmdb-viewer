import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getMoviePosterImageUrl} from '../api';
import Genre from '../containers/Genre';
import FavoriteBadge from '../containers/FavoriteBadge';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <article className="MovieCard">
        <p>
          {movie.title}
        </p>
        <img
          className="MovieCard-Poster"
          src={getMoviePosterImageUrl(movie.poster_path)}
          alt={movie.title}
        />
        <FavoriteBadge movie={movie.id} />
        <ul className="MovieCard-GenresList">
          {movie.genres.map(genreId => (
            <li className="MovieCard-GenresList-Item" key={genreId}>
              <Genre id={genreId} />
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

export default MovieCard;