import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { GenreID } from '../../app/types';
import { RootState } from '../../app/store';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

interface GenreProps {
  genreId: GenreID;
}

function Genre({ genreId }: GenreProps) {
  const classes = useStyles();
  const genre = useSelector(
    (state: RootState) => state.entities.genres[genreId]
  );

  return <Chip className={classes.root} label={genre ? genre.name : '...'} />;
}

export default Genre;
