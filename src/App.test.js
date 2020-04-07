import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

test('renders I Got News For Ya!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I Got News For Ya/i);
  expect(linkElement).toBeInTheDocument();
});

