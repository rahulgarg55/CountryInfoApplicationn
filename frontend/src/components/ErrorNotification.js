/**
 * Renders an error notification component with the provided error message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to display.
 * @returns {JSX.Element} The error notification component.
 */
import React from 'react';

const ErrorNotification = ({ message }) => (
  <div className="error-notification">
    <p>Error: {message}</p>
  </div>
);

export default ErrorNotification;
