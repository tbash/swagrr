import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import SwagrrApp from './SwagrrApp';
import configureStore from '../store/configureStore';

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SwagrrApp />
      </Provider>
    );
  }
}
