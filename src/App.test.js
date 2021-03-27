import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/For Super Import Business Meeting use only/i);
  expect(linkElement).toBeInTheDocument();
});
