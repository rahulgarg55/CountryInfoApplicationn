/**
 * Provides Redux actions and reducers for managing country data in the application.
 *
 * The `searchCountries` action is used to search for countries based on a query string.
 * The `fetchCountryDetails` action is used to fetch detailed information about a specific country.
 *
 * The `countriesSlice` reducer manages the state of the countries data, including the list of
 * countries, the currently selected country, and any loading or error states.
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchCountriesAPI, getCountryDetailsAPI } from '../services/api';

/**
 * Dispatches an asynchronous action to search for countries based on a provided query string.
 *
 * This action creator uses the `createAsyncThunk` function from the Redux Toolkit library to
 * define an asynchronous action that can handle loading, success, and error states.
 *
 * When dispatched, this action will call the `searchCountriesAPI` function (defined elsewhere)
 * with the provided `query` parameter, and return the response data if the request is successful.
 * If an error occurs, the action will return the error message.
 *
 * @param {string} query - The search query to use when searching for countries.
 * @returns {Promise<Array<Country>>} - A promise that resolves to an array of country data.
 */
export const searchCountries = createAsyncThunk(
  'countries/search',
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchCountriesAPI(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

export const fetchCountryDetails = createAsyncThunk(
  'countries/fetchDetails',
  async (countryCode, { rejectWithValue }) => {
    try {
      const response = await getCountryDetailsAPI(countryCode);
      return response.data[0];
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    selectedCountry: null,
    loading: false,
    error: null,
    searchPerformed: false,
  },
  reducers:{
    clearSelectedCountry: (state) => {
      state.selectedCountry = null; 
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedCountry= null;
        state.searchPerformed = true; 
      })
      .addCase(searchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        if (action.payload.length === 0) {
            state.error = 'No countries found';
          }
      })
      .addCase(searchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.countries = [];
        state.selectedCountry= null;
      })
      .addCase(fetchCountryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCountry = action.payload;
      })
      .addCase(fetchCountryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.selectedCountry= null;
      });
  },
});
export const { clearSelectedCountry } = countriesSlice.actions; 
export default countriesSlice.reducer;
