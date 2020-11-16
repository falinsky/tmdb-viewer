import { connect } from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import { updateSearchMoviesQuery, prepareForNewSearchMovies } from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(updateSearchMoviesQuery(value)),
  onSubmit: () => dispatch(prepareForNewSearchMovies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
