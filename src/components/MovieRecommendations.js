import React from 'react';
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

export default MovieRecommendations;