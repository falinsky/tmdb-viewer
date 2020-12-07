import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    padding: theme.spacing(1),
  },
}));

interface RatingProps {
  value: number;
}

function Rating({ value }: RatingProps) {
  const classes = useStyles();

  return (
    <Avatar className={classes.root}>
      <span className={classes.value}>
        {value}
        <sup className={classes.percentSign}>%</sup>
      </span>
      <CircularProgress
        value={value}
        variant="determinate"
        className={classes.progress}
        color="inherit"
        thickness={2}
      />
    </Avatar>
  );
}

export default Rating;
