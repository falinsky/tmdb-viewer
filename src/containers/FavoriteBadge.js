import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FavoriteBadge from '../components/FavoriteBadge';
import {addMovieToFavorites, removeMovieFromFavorites} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    inFavorites: state.favorites.includes(ownProps.movie),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAdd: () => dispatch(addMovieToFavorites(ownProps.movie)),
    onRemove: () => dispatch(removeMovieFromFavorites(ownProps.movie)),
});

const FavoriteBadgeContainer = connect(mapStateToProps, mapDispatchToProps)(FavoriteBadge);
FavoriteBadgeContainer.propTypes = {
    movie: PropTypes.number.isRequired,
};

export default FavoriteBadgeContainer;