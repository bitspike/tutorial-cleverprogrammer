import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders light code link', () => {
  render(<App />);
  const linkElement = screen.getByText(/May your code be light as a feather!!!/i);
  expect(linkElement).toBeInTheDocument();
});
