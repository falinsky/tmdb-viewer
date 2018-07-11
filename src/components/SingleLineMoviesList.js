import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import SingleLineMoviesListItem from '../containers/SingleLineMoviesListItem';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
});

function SingleLineMoviesList({classes, title, movies}) {
  return (
    <section className={classes.root}>
      {title && <Typography variant="title" gutterBottom>{title}</Typography>}
      <GridList className={classes.list} cols={4}>
        {movies.map(id => (
          <SingleLineMoviesListItem id={id} key={id} />
        ))}
      </GridList>
    </section>
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