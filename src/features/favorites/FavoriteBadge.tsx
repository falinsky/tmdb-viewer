import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from './favoritesSlice';
import { MovieID } from '../../app/types';
import { RootState } from '../../app/store';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.dark,
  },
}));

interface FavoriteBadgeProps {
  movieId: MovieID;
  className?: string;
}

function FavoriteBadge({ movieId, className }: FavoriteBadgeProps) {
  const classes = useStyles();
  const inFavorites = useSelector((state: RootState) =>
    state.favorites.includes(movieId)
  );
  const dispatch = useDispatch();

  const onIconClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (inFavorites) {
      dispatch(removeMovie(movieId));
    } else {
      dispatch(addMovie(movieId));
    }
  };

  return (
    <Tooltip
      title={`${inFavorites ? 'Remove from' : 'Add to'} Favorites`}
      className={className || classes.root}
    >
      <IconButton onClick={onIconClick}>
        {inFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default FavoriteBadge;
