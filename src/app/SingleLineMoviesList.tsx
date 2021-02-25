import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import SingleLineMoviesListItem from './SingleLineMoviesListItem';
import Paper from '@material-ui/core/Paper';
import { MovieID } from '../tmdb-api/types';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  list: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

interface SingleLineMoviesListProps {
  title?: string;
  movieIds?: MovieID[];
}

function SingleLineMoviesList({
  title,
  movieIds = [],
}: SingleLineMoviesListProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} component="section" elevation={2}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      {movieIds.length ? (
        <GridList className={classes.list} cols={2.5}>
          {movieIds.map((id) => (
            <SingleLineMoviesListItem movieId={id} key={id} />
          ))}
        </GridList>
      ) : (
        <Typography>No movies found</Typography>
      )}
    </Paper>
  );
}

export default SingleLineMoviesList;
