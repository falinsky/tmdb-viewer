import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { loadMovie } from '../actions';
import { withDataAutoload } from '../hoc';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.movieId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(loadMovie(ownProps.movieId)),
});

const MovieCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withDataAutoload(MovieCard));
MovieCardContainer.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCardContainer;
