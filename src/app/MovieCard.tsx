import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieBackdropImageUrl, getMovieReleaseYear } from '../tmdb-api/api';
import FavoriteBadge from '../features/favorites/FavoriteBadge';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import { Movie } from '../tmdb-api/types';

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

interface MovieCardProps {
  movie?: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
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

export default MovieCard;
