/**
 * Renders a list of country cards, fetched from the Redux store.
 * If the countries are still loading, a loading spinner is displayed.
 * If there is an error fetching the countries, an error notification is displayed.
 */
import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorNotification from './ErrorNotification';

const CountryList = () => {
  const { countries, loading, error, searchPerformed } = useSelector((state) => state.countries);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;
  if (searchPerformed && countries.length === 0){ return <p>No countries found. Try a different search.</p>;}
  if (!searchPerformed) {
    return null;
  }
  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
