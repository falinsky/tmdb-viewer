import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import PopularMovies from './PopularMovies';
import {fetchGenres} from '../actions';
import MovieDetails from '../containers/MovieDetails';
import MainMenu from '../components/MainMenu';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  render() {
    return (
      <div>
        <header>
          <MainMenu />
        </header>
        <section>
          <Route path="/" exact component={PopularMovies} />
          <Route path="/movie/:id" component={MovieDetails} />
        </section>
      </div>
    );
  }
}

export default withRouter(connect()(App));