import {connect} from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';
import {searchMovies} from '../actions';

const mapStateToProps = (state) => ({
  movies: state.searchMovies.items,
  hasMore: !state.searchMovies.allFetched,
});

const mapDispatchToProps = {
  fetchMovies: (page) => (dispatch, getState) => dispatch(searchMovies(getState().searchMovies.query, page)),
};

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteMoviesList);
