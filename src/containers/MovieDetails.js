import {connect} from 'react-redux';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.match.params.id],
});

export default connect(mapStateToProps)(MovieDetails);
