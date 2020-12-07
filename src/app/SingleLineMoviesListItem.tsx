import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FavoriteBadge from '../features/favorites/FavoriteBadge';
import { getMovieBackdropImageUrl } from './api';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import { useSelector } from 'react-redux';
import { MovieID } from './types';
import { RootState } from './store';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.contrastText,
  },
  bar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  actionIcon: {
    display: 'flex',
  },
}));

interface SingleLineMoviesListItemProps {
  movieId: MovieID;
}

function SingleLineMoviesListItem({
  movieId,
  ...otherProps
}: SingleLineMoviesListItemProps) {
  const classes = useStyles();
  const movie = useSelector(
    (state: RootState) => state.entities.movies[movieId]
  );

  return (
    <GridListTile {...otherProps}>
      <img src={getMovieBackdropImageUrl(movie)} alt={movie.title} />
      <GridListTileBar
        title={movie.title}
        classes={{
          root: classes.bar,
          title: classes.title,
          actionIcon: classes.actionIcon,
        }}
        actionIcon={
          <React.Fragment>
            <FavoriteBadge movieId={movie.id} className={classes.title} />
            <IconButton
              component={Link}
              to={`/movie/${movie.id}`}
              className={classes.title}
            >
              <LinkIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </GridListTile>
  );
}

export default SingleLineMoviesListItem;
