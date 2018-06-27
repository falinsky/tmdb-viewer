import {connect} from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import {fetchMovie} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMovie: () => dispatch(fetchMovie(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
