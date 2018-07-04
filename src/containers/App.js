import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect, Switch} from 'react-router-dom';
import PopularMovies from './PopularMovies';
import {fetchGenres} from '../actions';
import MovieDetails from '../containers/MovieDetails';
import MainMenu from '../components/MainMenu';
import FavoriteMovies from './FavoriteMovies';
import SearchMovies from "./SearchMovies";
import SearchMoviesResult from "./SearchMoviesResult";
import '../components/App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  render() {
    return (
      <React.Fragment>
        <header className="MainHeader">
          <MainMenu />
          <Route component={SearchMovies} />
        </header>
        <main className="MainContent">
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

export default withRouter(connect()(App));