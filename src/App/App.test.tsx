import { render, screen } from '@testing-library/react';
import App from './App';

test('TEST', () => {
  render(<App />);
  const linkElement = screen.getByText(/Demo/i);
  expect(linkElement).toBeInTheDocument();
});
