import React from 'react';
import {Link} from 'react-router-dom';
import {getMoviePosterImageUrl} from '../api';
import Genre from '../containers/Genre';
import FavoriteBadge from '../containers/FavoriteBadge';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <p>
        {movie.title}
      </p>
      <img
        src={getMoviePosterImageUrl(movie.poster_path)}
        alt={movie.title}
      />
      <FavoriteBadge movie={movie.id} />
      <ul>
        {movie.genres.map(genreId => (
          <li key={genreId}>
            <Genre id={genreId} />
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default MovieCard;