import {connect} from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';
import {searchMovies} from '../actions';

const mapStateToProps = (state) => ({
  movies: state.searchMovies.items,
  hasMore: !state.searchMovies.allFetched && (state.searchMovies.query !== ''),
  uniqueKey: state.searchMovies.key.toString(),
  query: state.searchMovies.query,
});

const mergeProps = ({query, ...props}, {dispatch}) => ({
  ...props,
  fetchMovies: (page) => dispatch(searchMovies(query, page)),
});

export default connect(mapStateToProps, undefined, mergeProps)(InfiniteMoviesList);
