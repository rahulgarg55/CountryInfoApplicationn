/**
 * Tests the rendering of the main App component.
 * Verifies that the "learn react" text is present in the rendered output.
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
