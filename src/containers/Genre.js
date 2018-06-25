import {connect} from 'react-redux';
import Genre from '../components/Genre';

const mapStateToProps = (state, ownProps) => ({
  genre: state.genres.items.filter((item) => item.id === ownProps.id)[0],
});

export default connect(mapStateToProps)(Genre);
