/**
 * Renders a card component for a country, displaying its flag, name, and population.
 * When the card is clicked, it dispatches an action to fetch the details for the country.
 *
 * @param {Object} country - The country object to display in the card.
 * @param {string} country.cca3 - The 3-letter country code.
 * @param {Object} country.flags - The country's flag information.
 * @param {string} country.flags.svg - The URL of the country's SVG flag.
 * @param {string} country.name.common - The common name of the country.
 * @param {number} country.population - The population of the country.
 * @returns {JSX.Element} - The rendered country card component.
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountryDetails } from '../redux/countriesSlice';

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCountryDetails(country.cca3));
  };

  return (
    <div className="country-card" onClick={handleClick}>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;
