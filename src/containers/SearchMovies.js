import {connect} from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import {searchMovies} from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = {
  searchMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
