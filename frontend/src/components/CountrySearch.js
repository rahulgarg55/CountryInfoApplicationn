/**
 * A React component that provides a search input and button for searching countries.
 * 
 * When the user submits the search form, the `searchCountries` action is dispatched
 * with the current search query, triggering a search in the application's state.
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../redux/countriesSlice';

const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCountries(query));
  };

  return (
    <form onSubmit={handleSearch} className="country-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CountrySearch;
