/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from './src/navigation/index';
import { Provider } from 'react-redux';
import store from './src/redux/index';


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

