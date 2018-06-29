import React from 'react';
import MovieCard from './MovieCard';

const MESSAGE__LOADING = 'Loading...';
const MESSAGE__ERROR = 'Error';
const MESSAGE__NO_MOVIES_FOUND = 'No movies found';

class MoviesList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const {movies, isLoading, isError} = this.props;

    if (isLoading && !movies.length) {
      return MESSAGE__LOADING;
    }

    if (isError) {
      return MESSAGE__ERROR;
    }

    if (!movies.length) {
      return MESSAGE__NO_MOVIES_FOUND;
    }

    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    );
  }
}

MoviesList.defaultProps = {
  movies: [],
  isLoading: false,
  isError: false,
};

export default MoviesList;