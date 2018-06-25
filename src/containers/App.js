import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import PopularMovies from './PopularMovies';
import {fetchGenres} from '../actions';
import MovieDetails from '../containers/MovieDetails';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  render() {
    return (
      <div>
        <Route path="/" exact component={PopularMovies} />
        <Route path="/movie/:id" component={MovieDetails} />
      </div>
    );
  }
}

export default withRouter(connect()(App));