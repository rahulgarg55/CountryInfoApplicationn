/**
 * Provides functions to search for countries by name and retrieve country details by country code.
 *
 * @module countriesService
 */

/**
 * Searches for countries by name.
 *
 * @param {string} name - The name of the country to search for.
 * @returns {Promise<Object[]>} - An array of country objects matching the search query.
 */


/**
 * Retrieves detailed information about a country by its country code.
 *
 * @param {string} countryCode - The ISO 3166-1 alpha-3 country code.
 * @returns {Promise<Object>} - The country object with detailed information.
 * @throws {Error} - Throws an error if the country is not found.
 */

const axios = require('axios');

const API_BASE_URL = 'https://restcountries.com/v3.1';

const searchCountries = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw error;
  }
};

const getCountryDetails = async (countryCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/alpha/${countryCode}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('Country not found');
    }
    throw error;
  }
};

module.exports = {
  searchCountries,
  getCountryDetails,
};
