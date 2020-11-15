import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleLineMoviesList from '../components/SingleLineMoviesList';
import { withDataAutoload } from '../hoc';
import { fetchMovieRecommendations } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  movieIds: state.movieRecommendations.itemsById[ownProps.movieId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(fetchMovieRecommendations(ownProps.movieId)),
  shouldReloadDataAfterUpdate: (prevProps, currentProps) =>
    prevProps.movieId !== currentProps.movieId,
});

const MovieRecommendations = connect(
  mapStateToProps,
  mapDispatchToProps
)(withDataAutoload(SingleLineMoviesList));
MovieRecommendations.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieRecommendations;
