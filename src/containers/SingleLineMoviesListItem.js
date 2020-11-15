import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleLineGridListItem from '../components/SingleLineMoviesListItem';
import { loadMovie } from '../actions';
import { withDataAutoload } from '../hoc';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.movieId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(loadMovie(ownProps.movieId)),
});

const SingleLineMoviesListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withDataAutoload(SingleLineGridListItem));
SingleLineMoviesListItemContainer.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default SingleLineMoviesListItemContainer;
