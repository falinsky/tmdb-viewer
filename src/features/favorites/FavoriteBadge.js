import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from './favoritesSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.dark,
  },
}));

function FavoriteBadge({ movieId, className }) {
  const classes = useStyles();
  const inFavorites = useSelector((state) => state.favorites.includes(movieId));
  const dispatch = useDispatch();

  const onIconClick = (e) => {
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

FavoriteBadge.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default FavoriteBadge;
