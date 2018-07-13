import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import MovieCard from '../containers/MovieCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    justifyContent: 'center',
  },
  gridItem: {
    width: 400,
  },
  card: {
    height: '100%',
  }
});

function InfiniteMoviesList({classes, movies, fetchMovies, hasMore, uniqueKey}) {
  return (
    <section>
      <Grid
        container
        spacing={24}
        key={uniqueKey}
        className={classes.grid}
        component={InfiniteScroll}
        hasMore={hasMore}
        loadMore={fetchMovies}
      >
        {movies.map(id => (
          <Grid item key={id} className={classes.gridItem}>
            <MovieCard id={id} classes={{root: classes.card}} />
          </Grid>
        ))}

        {!movies.length && !hasMore && (
          <Grid item>
            <Typography>No movies found</Typography>
          </Grid>
        )}
      </Grid>
    </section>
  );
}

InfiniteMoviesList.defaultProps = {
  movies: [],
};

InfiniteMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  fetchMovies: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  // uniqueKey param is needed to completely remount InfiniteScroll component
  // it's needed to make it possible to start new searches with page 1 passed
  uniqueKey: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfiniteMoviesList);