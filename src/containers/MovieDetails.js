import {connect} from 'react-redux';
import MovieDetails from '../components/MovieDetails';

const mapStateToProps = (state, ownProps) => ({
  movie: state.popularMovies.items.filter((item) => item.id == ownProps.match.params.id)[0],
});

export default connect(mapStateToProps)(MovieDetails);
