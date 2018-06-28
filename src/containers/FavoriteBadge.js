import {connect} from 'react-redux';
import FavoriteBadge from '../components/FavoriteBadge';
import {addMovieToFavorites, removeMovieFromFavorites} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    inFavorites: state.favorites.includes(ownProps.movie.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAdd: () => dispatch(addMovieToFavorites(ownProps.movie.id)),
    onRemove: () => dispatch(removeMovieFromFavorites(ownProps.movie.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBadge);