import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getMovieBackdropImageUrl} from '../api';
import Genre from '../containers/Genre';
import FavoriteBadge from '../containers/FavoriteBadge';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'block',
    textDecoration: 'none',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  genre: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
  }
});

function MovieCard({classes, movie}) {
  if (!movie) {
    return null;
  }

  return (
    <Card className={classes.root} component={Link} to={`/movie/${movie.id}`}>
      <CardMedia
        className={classes.media}
        image={getMovieBackdropImageUrl(movie)}
        title={movie.title}
      />
      <CardHeader
        title={movie.title}
        subheader={new Date(movie.release_date).getFullYear()}
        action={
          <FavoriteBadge movie={movie.id} />
        }
      />
      <CardContent>
        {movie.genres.map(id => <Genre id={id} key={id} classes={{root: classes.genre}} />)}
      </CardContent>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    release_date: PropTypes.string.isRequired,
  }),
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);