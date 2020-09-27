import * as React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('renders "heavy construction" message', () => {
  const { getByText } = render(<App />);
  const construction = getByText(/heavy construction/i);

  expect(construction).toBeInTheDocument();
});

test('renders Home and About links', () => {
  const { getAllByText } = render(<App />);
  const home = getAllByText('Home');
  const about = getAllByText('About');

  expect(home[0]).toBeInTheDocument();
  expect(about[0]).toBeInTheDocument();
});

test('renders Back after clicking About', async () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('About'));

  await waitFor(() => screen.getByText('Go Back'));

  expect(screen.getByText('Go Back')).toBeInTheDocument();
});
