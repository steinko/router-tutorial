import { render, screen } from '@testing-library/react';
import Invoices from './invoices';

test('Invoices object  should exist with content "Invoices"', () => {
  render(<Invoices />);
  const linkElement = screen.getByText(/Invoices/i);
  expect(linkElement).toBeInTheDocument();
});
