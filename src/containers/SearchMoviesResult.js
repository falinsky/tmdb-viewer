import {connect} from 'react-redux';
import MoviesList from '../components/MoviesList';

const mapStateToProps = (state) => ({
  movies: state.searchMovies.items,
  isLoading: state.searchMovies.isFetching,
  isError: state.searchMovies.isError
});

const mapDispatchToProps = () => ({
  fetchMovies: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
