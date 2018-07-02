import {connect} from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import {updateSearchMoviesQuery} from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = {
  onChange: updateSearchMoviesQuery,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
