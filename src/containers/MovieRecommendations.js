import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieRecommendations from '../components/MovieRecommendations';
import {fetchMovieRecommendations} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  movies: state.movieRecommendations.itemsById[ownProps.movie],
  isLoading: state.movieRecommendations.isFetching,
  isError: state.movieRecommendations.isError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMovies: () => dispatch(fetchMovieRecommendations(ownProps.movie)),
});

const MovieRecommendationsContainer = connect(mapStateToProps, mapDispatchToProps)(MovieRecommendations);
MovieRecommendationsContainer.propTypes = {
  movie: PropTypes.number.isRequired,
};

export default MovieRecommendationsContainer;
