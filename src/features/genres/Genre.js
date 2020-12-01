import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

function Genre({ genreId }) {
  const classes = useStyles();
  const genre = useSelector((state) => state.entities.genres[genreId]);

  return <Chip className={classes.root} label={genre ? genre.name : '...'} />;
}

Genre.propTypes = {
  genreId: PropTypes.number.isRequired,
};

export default Genre;
