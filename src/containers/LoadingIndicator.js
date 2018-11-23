import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import {connect} from 'react-redux';

function LoadingIndicator({isLoading, className}) {
  return isLoading && <LinearProgress className={className} color="secondary" />;
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: Object.keys(state).some(key => state[key] && state[key].isFetching),
  }
}

export default connect(mapStateToProps)(LoadingIndicator);