import { render, screen } from '@testing-library/react';
import Invoices from './invoices';

test('Invoices object  should exist with content "Invoices"', () => {
  render(<Invoices />);
  const linkElement = screen.getByText(/Sanata Monica/i);
  expect(linkElement).toBeInTheDocument();
});

test('Invoices object  should exist with content "Invoices"', () => {
  render(<Invoices />);
  const linkElement = screen.getByText(/Wide Open Spaces/i);
  expect(linkElement).toBeInTheDocument();
});

