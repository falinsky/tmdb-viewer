import {connect} from 'react-redux';
import Genre from '../components/Genre';

const mapStateToProps = (state, ownProps) => ({
  genre: state.entities.genres[ownProps.id],
});

export default connect(mapStateToProps)(Genre);
