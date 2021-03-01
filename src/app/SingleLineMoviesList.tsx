import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import { Movie } from '../tmdb-api/types';
import { getMovieBackdropImageUrl } from '../tmdb-api/api';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FavoriteBadge from '../features/favorites/FavoriteBadge';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  list: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
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

interface SingleLineMoviesListProps {
  title?: string;
  movies?: Movie[];
}

function SingleLineMoviesList({
  title,
  movies = [],
}: SingleLineMoviesListProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} component="section" elevation={2}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      {movies.length ? (
        <GridList className={classes.list} cols={2.5}>
          {movies.map((movie) => (
            <GridListTile key={movie.id}>
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
                    <FavoriteBadge
                      movieId={movie.id}
                      className={classes.title}
                    />
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
          ))}
        </GridList>
      ) : (
        <Typography>No movies found</Typography>
      )}
    </Paper>
  );
}

export default SingleLineMoviesList;
