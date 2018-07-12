import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: 44,
    height: 44,
    backgroundColor: theme.palette.primary.main,
  },
  progress: {
    position: 'absolute',
  },
  percentSign: {
    fontSize: '50%',
  },
  value: {
    ...theme.typography.button,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing.unit,
  }
});

function Rating({classes, value}) {
  return (
    <Avatar className={classes.root}>
      <span className={classes.value}>{value}<sup className={classes.percentSign}>%</sup></span>
      <CircularProgress value={value} variant="static" className={classes.progress} color="inherit" thickness={2}/>
    </Avatar>
  );
}

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default withStyles(styles)(Rating);