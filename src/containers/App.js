import React, { Component } from 'react-native';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import SwagrrApp from './SwagrrApp';
import configureStore from '../store/configureStore';


const initialState = {
	tabs: {
		selectedTab: 'home'
	}
}

const store = configureStore(initialState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SwagrrApp />
      </Provider>
    );
  }
}
