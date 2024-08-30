import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/countries';

export const searchCountriesAPI = (query) => {
  return axios.get(`${API_BASE_URL}/search/${query}`);
};

export const getCountryDetailsAPI = (countryCode) => {
  return axios.get(`${API_BASE_URL}/${countryCode}`);
};
