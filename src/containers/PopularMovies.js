import {connect} from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';
import {fetchPopularMovies} from '../actions';

const mapStateToProps = (state) => ({
  movies: state.popularMovies.items,
  hasMore: !state.popularMovies.allFetched,
  isFetching: state.popularMovies.isFetching,
});

const mapDispatchToProps = {
  fetchMovies: fetchPopularMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteMoviesList);
