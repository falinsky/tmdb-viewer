import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';

function LoadingIndicator({ className }) {
  const isLoading = useSelector((state) =>
    Object.values(state).some((value) => value.isFetching)
  );

  return isLoading ? (
    <LinearProgress className={className} color="secondary" />
  ) : null;
}

LoadingIndicator.propTypes = {
  className: PropTypes.string,
};

export default LoadingIndicator;
