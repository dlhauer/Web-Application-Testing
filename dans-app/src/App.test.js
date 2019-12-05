import React from 'react';
import { render } from '@testing-library/react';
// import * as rtl from 'react-testing-library';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Display and Dashboard are rendered', () => {
  const {getByText} = render(<App />);
  getByText(/at bat/i);
  getByText(/dashboard/i);
})

test('Buttons are rendered', () => {
  const {getByTestId} = render(<App />);
  getByTestId(/strike-button/i);
  getByTestId(/ball-button/i);
  getByTestId(/foul-button/i);
  getByTestId(/hit-button/i);
})
