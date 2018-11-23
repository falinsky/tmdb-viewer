import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, Switch} from 'react-router-dom';
import PopularMovies from '../containers/PopularMovies';
import MovieDetails from '../containers/MovieDetails';
import MainMenu from '../components/MainMenu';
import FavoriteMovies from '../containers/FavoriteMovies';
import SearchMovies from "../containers/SearchMovies";
import SearchMoviesResult from "../containers/SearchMoviesResult";
import SearchQueryRestore from '../containers/SearchQueryRestore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LoadingIndicator from '../containers/LoadingIndicator';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

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

function App({classes}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position={'sticky'}>
        <LoadingIndicator className={classes.progress}/>
        <Toolbar className={classes.toolbar}>
          <Route render={(props) => (
            <MainMenu
              {...props}
              items={[
                {path: '/', label: 'Popular', iconComponent: StarBorderIcon},
                {path: '/favorites', label: 'Favorites', iconComponent: FavoriteBorderIcon},
              ]}
            />)}/>
          <Route component={SearchMovies}/>
          <Route path="/search/:query" component={SearchQueryRestore}/>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <div className={classes.content}>
          <Switch>
            <Redirect from="/search" exact to="/"/>
            <Route path="/" exact component={PopularMovies}/>
            <Route path="/search/:query" component={SearchMoviesResult}/>
            <Route path="/favorites" component={FavoriteMovies}/>
            <Route path="/movie/:id" component={MovieDetails}/>
          </Switch>
        </div>
      </main>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);