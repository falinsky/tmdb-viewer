import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  InfiniteLoader,
  List,
  WindowScroller,
  AutoSizer,
} from 'react-virtualized';
import MovieCard from './DefaultMovieCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: 'center',
  },
  gridItem: {
    padding: theme.spacing(1.5),
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function generateIndexesForRow(rowIndex, rowWidth, itemWidth, itemsAmount) {
  const result = [];
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);
  const startIndex = rowIndex * maxItemsPerRow;

  for (
    let i = startIndex;
    i < Math.min(startIndex + maxItemsPerRow, itemsAmount);
    i++
  ) {
    result.push(i);
  }

  return result;
}

function getMaxItemsAmountPerRow(rowWidth, itemWidth) {
  return Math.max(Math.floor(rowWidth / itemWidth), 1);
}

function getRowsAmount(rowWidth, itemWidth, itemsAmount, hasMore) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);

  return Math.ceil(itemsAmount / maxItemsPerRow) + (hasMore ? 1 : 0);
}

const RowItem = React.memo(function RowItem({
  movieId,
  className,
  itemComponentType: ItemComponentType,
  width,
}) {
  return (
    <Grid item className={className} style={{ width }}>
      <ItemComponentType movieId={movieId} />
    </Grid>
  );
});

const InfiniteMoviesList = ({
  itemWidth,
  itemHeight,
  hasMore,
  movieIds,
  itemComponentType,
  reset,
  isFetching,
  fetchMovies,
}) => {
  const classes = useStyles();
  const infiniteLoaderRef = useRef();

  useEffect(() => {
    if (reset && infiniteLoaderRef.current) {
      infiniteLoaderRef.current.resetLoadMoreRowsCache(true);
    }
  }, [reset, infiniteLoaderRef]);

  const loadMoreRows = () => {
    if (!isFetching) {
      fetchMovies();
    }
  };

  const noRowsRenderer = () => (
    <Grid item>
      <Typography>No movies found</Typography>
    </Grid>
  );

  return (
    <section>
      <AutoSizer disableHeight>
        {({ width: rowWidth }) => {
          const rowCount = getRowsAmount(
            rowWidth,
            itemWidth,
            movieIds.length,
            hasMore
          );

          return (
            <InfiniteLoader
              ref={infiniteLoaderRef}
              rowCount={rowCount}
              isRowLoaded={({ index }) => {
                const allItemsLoaded =
                  generateIndexesForRow(
                    index,
                    rowWidth,
                    itemWidth,
                    movieIds.length
                  ).length > 0;

                return !hasMore || allItemsLoaded;
              }}
              loadMoreRows={loadMoreRows}
            >
              {({ onRowsRendered, registerChild }) => (
                <WindowScroller>
                  {({ height, scrollTop }) => (
                    <List
                      className={classes.grid}
                      autoHeight
                      ref={registerChild}
                      height={height}
                      scrollTop={scrollTop}
                      width={rowWidth}
                      rowCount={rowCount}
                      rowHeight={itemHeight}
                      onRowsRendered={onRowsRendered}
                      rowRenderer={({ index, style, key }) => {
                        const movieIdsForRow = generateIndexesForRow(
                          index,
                          rowWidth,
                          itemWidth,
                          movieIds.length
                        ).map((movieIndex) => movieIds[movieIndex]);

                        return (
                          <div style={style} key={key} className={classes.row}>
                            {movieIdsForRow.map((movieId) => (
                              <RowItem
                                key={movieId}
                                movieId={movieId}
                                className={classes.gridItem}
                                itemComponentType={itemComponentType}
                                width={itemWidth}
                              />
                            ))}
                          </div>
                        );
                      }}
                      noRowsRenderer={noRowsRenderer}
                    />
                  )}
                </WindowScroller>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </section>
  );
};

InfiniteMoviesList.defaultProps = {
  movieIds: [],
  isFetching: false,
  hasMore: false,
  reset: false,
  fetchMovies: () => {},
  itemComponentType: MovieCard,
  itemWidth: 400,
  itemHeight: 360,
};

InfiniteMoviesList.propTypes = {
  movieIds: PropTypes.arrayOf(PropTypes.number.isRequired),
  fetchMovies: PropTypes.func,
  hasMore: PropTypes.bool,
  isFetching: PropTypes.bool,
  reset: PropTypes.bool,
  itemComponentType: PropTypes.elementType,
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
};

export default InfiniteMoviesList;
