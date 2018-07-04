import {connect} from 'react-redux';
import SearchMovies from '../components/SearchMovies';
import {updateSearchMoviesQuery, prepareForNewSearchMovies} from '../actions';

const mapStateToProps = (state) => ({
  query: state.searchMovies.query,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(updateSearchMoviesQuery(value)),
  onSubmit: (value) => {
    dispatch(prepareForNewSearchMovies());
    ownProps.history.push(`/search/${value}`);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
