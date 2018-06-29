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

export default connect(mapStateToProps, mapDispatchToProps)(MovieRecommendations);
