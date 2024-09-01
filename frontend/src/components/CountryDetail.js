/**
 * Renders a detailed view of the currently selected country.
 * 
 * This component is responsible for displaying the key details of the currently
 * selected country, including its name, flag, capital, region, subregion,
 * languages, population, and area. It retrieves the necessary data from the
 * Redux store and handles loading and error states.
 */
import React from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import ErrorNotification from './ErrorNotification';

const CountryDetail = () => {
  const { selectedCountry, loading, error } = useSelector((state) => state.countries);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;
  if (!selectedCountry) return null;

  return (
    <div className="country-detail">
      <h2>{selectedCountry.name.common}</h2>
      <img src={selectedCountry.flags.svg} alt={`${selectedCountry.name.common} flag`} />
      <p><strong>Capital:</strong> {selectedCountry.capital?.[0] || 'N/A'}</p>
      <p><strong>Region:</strong> {selectedCountry.region}</p>
      <p><strong>Subregion:</strong> {selectedCountry.subregion}</p>
      <p><strong>Languages:</strong> {Object.values(selectedCountry.languages || {}).join(', ')}</p>
      <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {selectedCountry.area.toLocaleString()} km²</p>
    </div>
  );
};

export default CountryDetail;
