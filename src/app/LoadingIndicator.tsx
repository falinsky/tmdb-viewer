import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useIsFetching } from 'react-query';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
  },
});

function LoadingIndicator() {
  const classes = useStyles();
  const isLoading = useSelector((state) =>
    Object.values(state).some((value) => value.isFetching)
  );
  const fetchingQueries = useIsFetching();

  return isLoading || fetchingQueries ? (
    <LinearProgress className={classes.root} color="secondary" />
  ) : null;
}

export default LoadingIndicator;
