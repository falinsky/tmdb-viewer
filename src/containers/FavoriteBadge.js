import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteBadge from '../components/FavoriteBadge';
import { addMovieToFavorites, removeMovieFromFavorites } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  inFavorites: state.favorites.includes(ownProps.movieId),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => dispatch(addMovieToFavorites(ownProps.movieId)),
  onRemove: () => dispatch(removeMovieFromFavorites(ownProps.movieId)),
});

const FavoriteBadgeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteBadge);
FavoriteBadgeContainer.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default FavoriteBadgeContainer;
