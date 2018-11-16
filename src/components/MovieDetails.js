import React from 'react';
import PropTypes from 'prop-types';
import {getMoviePosterImageUrl, getMovieReleaseYear} from '../api';
import MovieRecommendations from '../containers/MovieRecommendations';
import FavoriteBadge from '../containers/FavoriteBadge';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating';
import Genre from '../containers/Genre';

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
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
    marginTop: theme.spacing.unit * 2,
  },
});

function MovieDetails({classes, movie}) {
  return (
    <section>
      {!movie ? <Typography>Loading movie info...</Typography> : (
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
                    {movie.title} <time dateTime={movie.release_date}>({getMovieReleaseYear(movie)})</time>
                  </Typography>
                }
                action={
                  <FavoriteBadge movie={movie.id} />
                }
                avatar={
                  <Rating value={movie.vote_average * 10} />
                }
                subheader={`User score based on ${movie.vote_count} ${movie.vote_count > 1 ? 'votes' : 'vote'}`}
              />
              <CardContent>
                <section className={classes.section}>
                  <Typography variant="h6" gutterBottom>Overview</Typography>
                  <Typography gutterBottom>{movie.overview}</Typography>
                </section>
                <section className={classes.section}>
                  <Typography variant="h6" gutterBottom>Genres</Typography>
                  <div className={classes.genresList}>
                    {movie.genres.map(id => <Genre id={id} key={id} />)}
                  </div>
                </section>
              </CardContent>
            </div>
          </Card>
          <MovieRecommendations movie={movie.id} title="Recommendations" />
        </React.Fragment>
      )}
    </section>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_count: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDetails);