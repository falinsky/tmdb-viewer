import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit / 2,
  },
});

function Genre({classes, genre}) {
  return (
    <Chip className={classes.root} label={genre ? genre.name : '...'}/>
  );
}

Genre.propTypes = {
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Genre);