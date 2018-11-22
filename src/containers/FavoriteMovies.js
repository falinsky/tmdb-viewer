import {connect} from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';

const mapStateToProps = (state) => ({
  movies: state.favorites,
});

export default connect(mapStateToProps)(InfiniteMoviesList);
