import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware,createStore } from 'redux';
import logger from 'redux-logger'
import reducer from './reducers'
import App from './routes/App';

const initialState = {}
const store = createStore(reducer,initialState,applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
