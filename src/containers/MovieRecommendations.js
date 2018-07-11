import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SingleLineMoviesList from '../components/SingleLineMoviesList';
import {withDataAutoload} from '../hoc';
import {fetchMovieRecommendations} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  movies: state.movieRecommendations.itemsById[ownProps.movie],
  isLoading: state.movieRecommendations.isFetching,
  isError: state.movieRecommendations.isError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(fetchMovieRecommendations(ownProps.movie)),
  shouldReloadDataAfterUpdate: (prevProps, currentProps) => prevProps.movie !== currentProps.movie,
});

const MovieRecommendations = connect(mapStateToProps, mapDispatchToProps)(withDataAutoload(SingleLineMoviesList));
MovieRecommendations.propTypes = {
  movie: PropTypes.number.isRequired,
};

export default MovieRecommendations;
