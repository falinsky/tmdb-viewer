import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MovieCard from '../components/MovieCard';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.id],
});

const MovieCardContainer = connect(mapStateToProps)(MovieCard);
MovieCardContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieCardContainer;
