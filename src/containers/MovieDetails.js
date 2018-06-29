import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import {loadMovie} from '../actions';
import {withDataAutoload} from '../hoc';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(loadMovie(ownProps.match.params.id)),
});

const MovieDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(withDataAutoload(MovieDetails));
MovieDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetailsContainer;
