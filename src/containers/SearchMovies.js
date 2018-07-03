import {connect} from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import {updateSearchMoviesQuery, searchMovies} from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = {
  onChange: updateSearchMoviesQuery,
  onSubmit: searchMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
