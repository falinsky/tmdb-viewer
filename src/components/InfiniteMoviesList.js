import React from 'react';
import PropTypes from 'prop-types';
import {InfiniteLoader, List, WindowScroller, AutoSizer} from 'react-virtualized';
import MovieCard from '../containers/MovieCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const ITEM_WIDTH = 400;
const ITEM_HEIGHT = 440;

const styles = theme => ({
  grid: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    justifyContent: 'center',
  },
  gridItem: {
    width: ITEM_WIDTH,
    margin: 1.5 * theme.spacing.unit,
  },
  card: {
    height: '100%',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  }
});

function generateIndexesForRow(rowIndex, maxItemsPerRow, itemsAmount) {
  const result = [];
  const startIndex = rowIndex * maxItemsPerRow;

  for (let i = startIndex; i < Math.min(startIndex + maxItemsPerRow, itemsAmount); i++) {
    result.push(i);
  }

  return result;
}

function InfiniteMoviesList({classes, movies, fetchMovies, hasMore, uniqueKey, isFetching}) {

  function loadMoreRows() {
    if (!isFetching) {
      fetchMovies();
    }
  }

  return (
    <section>
      <WindowScroller>
        {({height, onChildScroll, scrollTop}) => (
          <AutoSizer disableHeight>
            {({width}) => {
              const maxItemsPerRow = Math.max(Math.floor(width / ITEM_WIDTH), 1);
              const rowCount = Math.ceil(movies.length / maxItemsPerRow) + (hasMore ? 1 : 0);

              function isRowLoaded({index}) {
                const allItemsLoaded = generateIndexesForRow(index, maxItemsPerRow, movies.length).length > 0;

                return !hasMore || allItemsLoaded;
              }

              return (
                <InfiniteLoader
                  key={uniqueKey}
                  rowCount={rowCount}
                  isRowLoaded={isRowLoaded}
                  loadMoreRows={loadMoreRows}
                >
                  {({onRowsRendered, registerChild}) => (
                    <List
                      className={classes.grid}
                      autoHeight
                      ref={registerChild}
                      height={height}
                      scrollTop={scrollTop}
                      width={width}
                      rowCount={rowCount}
                      rowHeight={ITEM_HEIGHT /* TODO: fix this hardcoded row height */}
                      onRowsRendered={onRowsRendered}
                      rowRenderer={({index, style, key}) => {
                        return (
                          <div style={style} key={key} className={classes.row}>
                            {generateIndexesForRow(index, maxItemsPerRow, movies.length).map(movieIndex => (
                              <Grid item className={classes.gridItem} key={movieIndex}>
                                <MovieCard id={movies[movieIndex]} classes={{root: classes.card}} />
                              </Grid>
                            ))}
                          </div>
                        )
                      }}
                      noRowsRenderer={() => (
                        <Grid item>
                          <Typography>No movies found</Typography>
                        </Grid>
                      )}
                    />
                  )}
                </InfiniteLoader>
              );
            }}
          </AutoSizer>
        )}
      </WindowScroller>
    </section>
  );
}

InfiniteMoviesList.defaultProps = {
  movies: [],
  isFetching: false,
  hasMore: false,
  fetchMovies: () => {},
};

InfiniteMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  fetchMovies: PropTypes.func,
  hasMore: PropTypes.bool,
  isFetching: PropTypes.bool,
  // uniqueKey param is needed to completely remount InfiniteLoader component
  // it's needed to make it possible to start new searches  TODO: eliminate this dirty and slow hack
  uniqueKey: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfiniteMoviesList);