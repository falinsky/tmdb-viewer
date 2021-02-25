import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  getMoviePosterImageUrl,
  getMovieReleaseYear,
} from '../../tmdb-api/api';
import MovieRecommendations from '../movie-recommendations/MovieRecommendations';
import FavoriteBadge from '../favorites/FavoriteBadge';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating';
import Genre from '../genres/Genre';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovieDetails from './movieDetailsThunk';
import { RootState } from '../../app/store';
import { MovieID } from '../../tmdb-api/types';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexWrap: 'wrap',
  },
  media: {
    height: 450,
    flexBasis: 300,
    flexShrink: 0,
    flexGrow: 1,
  },
  contentWrapper: {
    flexBasis: 300,
    flexShrink: 0,
    flexGrow: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  genresList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  section: {
    marginTop: theme.spacing(2),
  },
}));

type MovieDetailsProps = RouteComponentProps<{ movieId: string }>;

function MovieDetails({ match }: MovieDetailsProps) {
  const { movieId: id } = match.params;
  const movieId = Number(id) as MovieID;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [movieId, dispatch]);

  const movie = useSelector(
    (state: RootState) => state.entities.movies[movieId]
  );

  return (
    <section>
      {!movie ? (
        <Typography>Loading movie info...</Typography>
      ) : (
        <React.Fragment>
          <Card className={classes.card} component="article">
            <CardMedia
              className={classes.media}
              image={getMoviePosterImageUrl(movie)}
              title={movie.title}
            />
            <div className={classes.contentWrapper}>
              <CardHeader
                title={
                  <Typography variant="h5" gutterBottom>
                    {movie.title}{' '}
                    <time dateTime={movie.release_date}>
                      ({getMovieReleaseYear(movie)})
                    </time>
                  </Typography>
                }
                action={<FavoriteBadge movieId={movie.id} />}
                avatar={<Rating value={movie.vote_average * 10} />}
                subheader={`User score based on ${movie.vote_count} ${
                  movie.vote_count > 1 ? 'votes' : 'vote'
                }`}
              />
              <CardContent>
                <section className={classes.section}>
                  <Typography variant="h6" gutterBottom>
                    Overview
                  </Typography>
                  <Typography gutterBottom>{movie.overview}</Typography>
                </section>
                <section className={classes.section}>
                  <Typography variant="h6" gutterBottom>
                    Genres
                  </Typography>
                  <div className={classes.genresList}>
                    {movie.genres.map((id) => (
                      <Genre genreId={id} key={id} />
                    ))}
                  </div>
                </section>
              </CardContent>
            </div>
          </Card>
          <MovieRecommendations movieId={movie.id} title="Recommendations" />
        </React.Fragment>
      )}
    </section>
  );
}

export default MovieDetails;
