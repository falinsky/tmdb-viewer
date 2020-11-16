import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const styles = (theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
});

function Genre({ classes, genreId }) {
  const genre = useSelector((state) => state.entities.genres[genreId]);

  return <Chip className={classes.root} label={genre ? genre.name : '...'} />;
}

Genre.propTypes = {
  genreId: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Genre);
