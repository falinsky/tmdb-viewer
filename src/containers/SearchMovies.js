import {connect} from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import {updateSearchMoviesQuery, searchMovies} from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(updateSearchMoviesQuery(value)),
  onSubmit: (value) => {
    dispatch(searchMovies(value));
    ownProps.history.push(`/search?query=${value}`);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
