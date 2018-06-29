import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../containers/MovieCard';

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
        {movies.map(id => (
          <li key={id}>
            <MovieCard id={id} />
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  fetchMovies: PropTypes.func.isRequired,
};

export default MoviesList;