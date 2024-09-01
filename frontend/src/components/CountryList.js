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

  // If there are countries (either from a search or persisted state), show them
  if (countries.length > 0) {
    return (
      <div className="country-list">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    );
  }

  // If a search has been performed but no countries found
  if (searchPerformed && countries.length === 0) {
    return <p>No countries found</p>;
  }

  // If no search has been performed and no persisted data, don't show anything
  return null;
};

export default CountryList;

