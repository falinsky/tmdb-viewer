import {connect} from 'react-redux';
import MoviesList from '../components/MoviesList';
import {fetchPopularMovies} from '../actions';

const mapStateToProps = (state) => ({
  movies: state.popularMovies.results,
  isLoading: state.popularMovies.isFetching,
  isError: state.popularMovies.isError
});

const mapDispatchToProps = {
  fetchMovies: fetchPopularMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
