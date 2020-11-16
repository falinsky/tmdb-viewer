import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToFavorites, removeMovieFromFavorites } from '../actions';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.dark,
  },
});

function FavoriteBadge({ classes, movieId }) {
  const inFavorites = useSelector((state) => state.favorites.includes(movieId));
  const dispatch = useDispatch();

  const onIconClick = (e) => {
    e.preventDefault();

    if (inFavorites) {
      dispatch(removeMovieFromFavorites(movieId));
    } else {
      dispatch(addMovieToFavorites(movieId));
    }
  };

  return (
    <Tooltip title={`${inFavorites ? 'Remove from' : 'Add to'} Favorites`}>
      <IconButton onClick={onIconClick} className={classes.root}>
        {inFavorites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}

FavoriteBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default withStyles(styles)(FavoriteBadge);
