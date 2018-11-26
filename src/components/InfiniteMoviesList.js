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

function getMaxItemsAmountPerRow(width) {
  return Math.max(Math.floor(width / ITEM_WIDTH), 1);
}

function getRowsAmount(width, itemsAmount, hasMore) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(width);

  return Math.ceil(itemsAmount/ maxItemsPerRow) + (hasMore ? 1 : 0);
}

const RowItem = React.memo(function RowItem({movieId, classes}) {
  return (
    <Grid item className={classes.gridItem} key={movieId}>
      <MovieCard id={movieId} classes={{root: classes.card}} />
    </Grid>
  );
});

class InfiniteMoviesList extends React.PureComponent {
  infiniteLoaderRef = React.createRef();

  loadMoreRows = () => {
    if (!this.props.isFetching) {
      this.props.fetchMovies();
    }
  };

  noRowsRenderer = () => (
    <Grid item>
      <Typography>No movies found</Typography>
    </Grid>
  );

  componentDidUpdate(prevProps) {
    if (!prevProps.reset && this.props.reset && this.infiniteLoaderRef.current) {
      this.infiniteLoaderRef.current.resetLoadMoreRowsCache(true);
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <section>
        <AutoSizer disableHeight>
          {({width}) => (
            <WindowScroller>
              {({height, scrollTop}) => {
                const {movies, hasMore} = this.props;
                const rowCount = getRowsAmount(width, movies.length, hasMore);

                return (
                  <InfiniteLoader
                    ref={this.infiniteLoaderRef}
                    rowCount={rowCount}
                    isRowLoaded={({index}) => {
                      const {hasMore, movies} = this.props;
                      const maxItemsPerRow = getMaxItemsAmountPerRow(width);
                      const allItemsLoaded = generateIndexesForRow(index, maxItemsPerRow, movies.length).length > 0;

                      return !hasMore || allItemsLoaded;
                    }}
                    loadMoreRows={this.loadMoreRows}
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
                          const {movies, classes} = this.props;
                          const maxItemsPerRow = getMaxItemsAmountPerRow(width);
                          const moviesIds = generateIndexesForRow(index, maxItemsPerRow, movies.length).map(movieIndex => movies[movieIndex]);

                          return (
                            <div style={style} key={key} className={classes.row}>
                              {moviesIds.map(movieId => (
                                <RowItem key={movieId} movieId={movieId} classes={classes}/>
                              ))}
                            </div>
                          )
                        }}
                        noRowsRenderer={this.noRowsRenderer}
                      />
                    )}
                  </InfiniteLoader>
                );
              }}
            </WindowScroller>
          )}
        </AutoSizer>
      </section>
    );
  }
}

InfiniteMoviesList.defaultProps = {
  movies: [],
  isFetching: false,
  hasMore: false,
  reset: false,
  fetchMovies: () => {},
};

InfiniteMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.number.isRequired),
  fetchMovies: PropTypes.func,
  hasMore: PropTypes.bool,
  isFetching: PropTypes.bool,
  reset: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfiniteMoviesList);