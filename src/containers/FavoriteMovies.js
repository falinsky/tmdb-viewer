import {connect} from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';

const mapStateToProps = (state) => ({
  movies: state.favorites,
  hasMore: false,
  isLoading: false,
  isError: false,
});

const mapDispatchToProps = () => ({
  fetchMovies: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteMoviesList);
