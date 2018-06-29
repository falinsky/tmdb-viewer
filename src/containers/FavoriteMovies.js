import {connect} from 'react-redux';
import MoviesList from '../components/MoviesList';

const mapStateToProps = (state) => ({
  movies: state.favorites,
  isLoading: false,
  isError: false,
});

const mapDispatchToProps = () => ({
  fetchMovies: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
