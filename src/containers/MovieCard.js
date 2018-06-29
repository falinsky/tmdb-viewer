import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../components/MovieCard';
import {loadMovie} from '../actions';
import {withDataAutoload} from '../hoc';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(loadMovie(ownProps.id)),
});

const MovieCardContainer = connect(mapStateToProps, mapDispatchToProps)(withDataAutoload(MovieCard));
MovieCardContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieCardContainer;
