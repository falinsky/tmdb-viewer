import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SingleLineGridListItem from '../components/SingleLineMoviesListItem';
import {loadMovie} from '../actions';
import {withDataAutoload} from '../hoc';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(loadMovie(ownProps.id)),
});

const SingleLineMoviesListItemContainer = connect(mapStateToProps, mapDispatchToProps)(withDataAutoload(SingleLineGridListItem));
SingleLineMoviesListItemContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default SingleLineMoviesListItemContainer;
