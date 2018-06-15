import React from 'react';
import {connect} from 'react-redux';
import PopularMovies from './PopularMovies';
import {fetchGenres} from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  render() {
    return (
      <PopularMovies/>
    );
  }
}

export default connect()(App);