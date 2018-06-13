import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import PopularMovies from './containers/PopularMovies';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render((
  <Provider store={store}>
    <PopularMovies />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
