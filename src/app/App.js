import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import PopularMovies from '../features/popular-movies/PopularMovies';
import MovieDetails from '../features/movie-details/MovieDetails';
import MainMenu from './MainMenu';
import FavoriteMovies from '../features/favorites/FavoriteMovies';
import SearchMovies from '../features/search-movies/SearchMovies';
import SearchMoviesResult from '../features/search-movies/SearchMoviesResult';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LoadingIndicator from './LoadingIndicator';

const styles = {
  toolbar: {
    justifyContent: 'space-between',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: '85%',
  },
  progress: {
    position: 'absolute',
    width: '100%',
  },
};

function App({ classes }) {
  return (
    <Router>
      <CssBaseline />
      <AppBar position={'sticky'}>
        <LoadingIndicator className={classes.progress} />
        <Toolbar className={classes.toolbar}>
          <Route
            render={(props) => (
              <MainMenu
                {...props}
                items={[
                  {
                    path: '/',
                    label: 'Popular',
                    iconComponent: StarBorderIcon,
                  },
                  {
                    path: '/favorites',
                    label: 'Favorites',
                    iconComponent: FavoriteBorderIcon,
                  },
                ]}
              />
            )}
          />
          <Route path={['/search/:query', '/']} component={SearchMovies} />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <div className={classes.content}>
          <Switch>
            <Redirect from="/search" exact to="/" />
            <Route path="/" exact component={PopularMovies} />
            <Route path="/search/:query" component={SearchMoviesResult} />
            <Route path="/favorites" component={FavoriteMovies} />
            <Route path="/movie/:movieId" component={MovieDetails} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
