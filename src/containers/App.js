import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import PopularMovies from './PopularMovies';
import {fetchGenres} from '../actions';
import MovieDetails from '../containers/MovieDetails';
import MainMenu from '../components/MainMenu';
import FavoriteMovies from './FavoriteMovies';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <MainMenu />
        </header>
        <main>
          <Route path="/" exact component={PopularMovies} />
          <Route path="/favorites" component={FavoriteMovies} />
          <Route path="/movie/:id" component={MovieDetails} />
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App));