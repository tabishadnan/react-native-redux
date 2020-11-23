import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './store/reducers/CounterReducer';
import CounterComponent from './components/CounterComponent';

const rootReducer = combineReducers({
  CounterReducer: CounterReducer,
});

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};