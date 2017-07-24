import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/counterStore';
import CounterContainer from '../containers/CounterContainer';

const CounterApp = props => (
  <Provider store={configureStore(props)}>
    <CounterContainer />
  </Provider>
);

export default CounterApp;
