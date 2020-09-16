import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "heavy construction" message', () => {
  const { getByText } = render(<App />);
  const construction = getByText(/heavy construction/i);
  expect(construction).toBeInTheDocument();
});
