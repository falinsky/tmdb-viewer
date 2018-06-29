import {connect} from 'react-redux';
import MovieRecommendations from '../components/MovieRecommendations';
import {fetchMovieRecommendations} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  movies: state.movieRecommendations.itemsById[ownProps.movie.id],
  isLoading: state.movieRecommendations.isFetching,
  isError: state.movieRecommendations.isError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMovies: () => dispatch(fetchMovieRecommendations(ownProps.movie.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRecommendations);
