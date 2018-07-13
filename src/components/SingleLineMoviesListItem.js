import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FavoriteBadge from '../containers/FavoriteBadge';
import {getMovieBackdropImageUrl} from '../api';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

const styles = theme => ({
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
});

function SingleLineMoviesListItem({classes, movie, ...otherProps}) {
  return (
    <GridListTile {...otherProps}>
      <img src={getMovieBackdropImageUrl(movie)} alt={movie.title}/>
      <GridListTileBar
        title={movie.title}
        classes={{
          root: classes.bar,
          title: classes.title,
          actionIcon: classes.actionIcon,
        }}
        actionIcon={
          <React.Fragment>
            <FavoriteBadge movie={movie.id} classes={{root: classes.title}}/>
            <IconButton component={Link} to={`/movie/${movie.id}`} className={classes.title}>
              <LinkIcon/>
            </IconButton>
          </React.Fragment>
        }
      />
    </GridListTile>
  );
}

SingleLineMoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineMoviesListItem);