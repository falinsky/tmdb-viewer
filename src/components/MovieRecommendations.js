import React from 'react';
import MoviesList from './MoviesList';

class MovieRecommendations extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.movie.id !== this.props.movie.id) {
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