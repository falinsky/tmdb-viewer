import { connect } from 'react-redux';
import InfiniteMoviesList from '../components/InfiniteMoviesList';

const mapStateToProps = (state) => ({
  movieIds: state.favorites,
});

export default connect(mapStateToProps)(InfiniteMoviesList);
