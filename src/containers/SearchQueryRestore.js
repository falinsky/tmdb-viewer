import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSearchMoviesQuery} from '../actions';

class SearchQueryRestore extends React.Component {
  componentDidMount() {
    this.props.dispatch(updateSearchMoviesQuery(this.props.match.params.query));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.props.dispatch(updateSearchMoviesQuery(this.props.match.params.query));
    }
  }

  render() {
    return null;
  }
}

SearchQueryRestore.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect()(SearchQueryRestore);