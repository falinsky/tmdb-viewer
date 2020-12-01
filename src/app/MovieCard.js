import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovieBackdropImageUrl, getMovieReleaseYear } from './api';
import FavoriteBadge from '../features/favorites/FavoriteBadge';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  actionArea: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function MovieCard({ movie }) {
  const classes = useStyles();

  if (!movie) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={`/movie/${movie.id}`}
      >
        <CardMedia
          className={classes.media}
          image={getMovieBackdropImageUrl(movie)}
          title={movie.title}
        />
        <CardHeader
          title={movie.title}
          subheader={getMovieReleaseYear(movie)}
          action={<FavoriteBadge movieId={movie.id} />}
        />
      </CardActionArea>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
