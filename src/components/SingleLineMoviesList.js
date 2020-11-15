import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import SingleLineMoviesListItem from '../containers/SingleLineMoviesListItem';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
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
});

function SingleLineMoviesList({ classes, title, movieIds }) {
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

SingleLineMoviesList.defaultProps = {
  movieIds: [],
};

SingleLineMoviesList.propTypes = {
  movieIds: PropTypes.arrayOf(PropTypes.number.isRequired),
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineMoviesList);
