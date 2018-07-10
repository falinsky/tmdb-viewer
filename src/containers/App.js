import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect, Switch} from 'react-router-dom';
import PopularMovies from './PopularMovies';
import {fetchGenres} from '../actions';
import MovieDetails from '../containers/MovieDetails';
import MainMenu from '../components/MainMenu';
import FavoriteMovies from './FavoriteMovies';
import SearchMovies from "./SearchMovies";
import SearchMoviesResult from "./SearchMoviesResult";
import SearchQueryRestore from './SearchQueryRestore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = {
  toolbar: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position={'sticky'}>
          <Toolbar className={classes.toolbar}>
            <Route component={MainMenu} />
            <Route component={SearchMovies} />
            <Route path="/search/:query" component={SearchQueryRestore} />
          </Toolbar>
        </AppBar>
        <main>
          <Switch>
            <Redirect from="/search" exact to="/" />
            <Route path="/" exact component={PopularMovies} />
            <Route path="/search/:query" component={SearchMoviesResult} />
            <Route path="/favorites" component={FavoriteMovies} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(connect()(App)));