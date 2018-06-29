import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Genre from '../components/Genre';

const mapStateToProps = (state, ownProps) => ({
  genre: state.entities.genres[ownProps.id],
});

const GenreContainer = connect(mapStateToProps)(Genre);
GenreContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GenreContainer;
