/**
 * Configures and exports the Redux store for the application.
 * The store is initialized with a 'countries' slice, which manages the state of the countries in the application.
 */
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
