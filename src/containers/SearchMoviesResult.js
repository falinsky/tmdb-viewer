import {connect} from 'react-redux';
import MoviesList from '../components/MoviesList';
import {searchMovies} from '../actions';

const mapStateToProps = (state) => ({
  movies: state.searchMovies.items,
  isLoading: state.searchMovies.isFetching,
  isError: state.searchMovies.isError
});

const mapDispatchToProps = {
  fetchMovies: () => (dispatch, getState) => dispatch(searchMovies(getState().searchMovies.query)),
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
