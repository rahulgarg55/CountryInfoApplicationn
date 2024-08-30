/**
 * Renders a loading spinner component.
 *
 * This component is used to display a loading spinner, typically when waiting for data to load or an asynchronous operation to complete.
 *
 * @returns {JSX.Element} The loading spinner component.
 */
import React from 'react';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

export default LoadingSpinner;
