import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from './MoviesList';

class MovieRecommendations extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.movie !== this.props.movie) {
      this.props.fetchMovies();
    }
  }

  render() {
    return (
      <MoviesList movies={this.props.movies} fetchMovies={this.props.fetchMovies} />
    );
  }
}

MovieRecommendations.propTypes = {
  movie: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  fetchMovies: PropTypes.func.isRequired,
};

export default MovieRecommendations;