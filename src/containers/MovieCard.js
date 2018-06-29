import {connect} from 'react-redux';
import MovieCard from '../components/MovieCard';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.id],
});

export default connect(mapStateToProps)(MovieCard);
