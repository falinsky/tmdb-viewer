import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import SingleLineMoviesListItem from '../containers/SingleLineMoviesListItem';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit,
    marginTop: 2 * theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit,
  },
  list: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
});

function SingleLineMoviesList({classes, title, movies}) {
  return (
    <Paper className={classes.root} component="section">
      {title && <Typography variant="h6" gutterBottom>{title}</Typography>}
      {movies.length ? (
        <GridList className={classes.list} cols={2.5}>
          {movies.map(id => (
            <SingleLineMoviesListItem id={id} key={id} />
          ))}
        </GridList>
      ) : (
        <Typography>No movies found</Typography>
      )}
    </Paper>
  );
}

SingleLineMoviesList.defaultProps = {
  movies: [],
};

SingleLineMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineMoviesList);