import React, { useEffect, useRef } from 'react';
import {
  InfiniteLoader,
  List,
  WindowScroller,
  AutoSizer,
  IndexRange,
} from 'react-virtualized';
import MovieCard from './DefaultMovieCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MovieID } from '../tmdb-api/types';

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

function generateIndexesForRow(
  rowIndex: number,
  rowWidth: number,
  itemWidth: number,
  itemsAmount: number
) {
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

function getMaxItemsAmountPerRow(rowWidth: number, itemWidth: number) {
  return Math.max(Math.floor(rowWidth / itemWidth), 1);
}

function getRowsAmount(
  rowWidth: number,
  itemWidth: number,
  itemsAmount: number,
  hasMore: boolean
) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);

  return Math.ceil(itemsAmount / maxItemsPerRow) + (hasMore ? 1 : 0);
}

interface RowItemProps {
  movieId: MovieID;
  className: string;
  itemComponentType: React.ElementType;
  width: number;
}

const RowItem = React.memo(function RowItem({
  movieId,
  className,
  itemComponentType: ItemComponentType,
  width,
}: RowItemProps) {
  return (
    <Grid item className={className} style={{ width }}>
      <ItemComponentType movieId={movieId} />
    </Grid>
  );
});

interface InfiniteMoviesListProps {
  movieIds?: MovieID[];
  fetchMovies?: Function;
  hasMore?: boolean;
  isFetching?: boolean;
  reset?: boolean;
  itemComponentType?: React.ElementType;
  itemWidth?: number;
  itemHeight?: number;
}

const InfiniteMoviesList = ({
  itemWidth = 400,
  itemHeight = 360,
  hasMore = false,
  movieIds = [],
  itemComponentType = MovieCard,
  reset = false,
  isFetching = false,
  fetchMovies = () => {},
}: InfiniteMoviesListProps) => {
  const classes = useStyles();
  const infiniteLoaderRef = useRef<InfiniteLoader>(null);

  useEffect(() => {
    if (reset && infiniteLoaderRef.current) {
      infiniteLoaderRef.current.resetLoadMoreRowsCache(true);
    }
  }, [reset, infiniteLoaderRef]);

  // TODO: check if it's possible to leverage the returned promise
  const loadMoreRows = async (_: IndexRange) => {
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

export default InfiniteMoviesList;
