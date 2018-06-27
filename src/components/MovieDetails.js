import React from 'react';
import {Link} from 'react-router-dom';
import {getMoviePosterImageUrl} from '../api';

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.fetchMovie();
  }

  render() {
    const {movie} = this.props;

    return (
      <React.Fragment>
        {!movie ? 'Loading movie info...' : (
          <main>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={getMoviePosterImageUrl(movie.backdrop_path)} alt={movie.title} />
          </main>
        )}
        <footer>
          <Link to="/">Return to main page</Link>
        </footer>
      </React.Fragment>
    );
  }
}

export default MovieDetails;