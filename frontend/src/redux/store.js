/**
 * Configures and exports the Redux store for the application.
 * The store is initialized with a 'countries' slice, which manages the state of the countries in the application.
 */
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../redux/countriesSlice';
import { loadState, saveState } from '../utils/localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(throttle(() => {
  saveState({
    countries: store.getState().countries
  });
}, 1000));

export default store;
