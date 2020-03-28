import React, { Component } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import Screen from "./src/screen/index";
const persistantStore = configureStore();
const { store, persistor } = persistantStore;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'redux Setup'
    }

  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <Screen  {...this.state}/>

        </PersistGate>

      </Provider>
    )
  }
}