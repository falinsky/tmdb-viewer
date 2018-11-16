import {connect} from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import {updateSearchMoviesQuery, startNewSearchMovies} from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(updateSearchMoviesQuery(value)),
  onSubmit: (value) => dispatch(startNewSearchMovies(value, ownProps.history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
