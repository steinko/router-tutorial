import { render, screen } from '@testing-library/react';
import Expenses from './expenses';

test('Expenses should exist with content "Epenses"', () => {
  render(<Expenses />);
  const linkElement = screen.getByText(/Expenses/i);
  expect(linkElement).toBeInTheDocument();
});
