import React, { Component } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import Navigation from "./src/screen/navigation";

const persistantStore = configureStore();
const { store, persistor } = persistantStore;

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>

      <Navigation/>

        </PersistGate>

      </Provider>
    )
  }
}