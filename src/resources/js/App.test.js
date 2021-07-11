import { render, screen } from '@testing-library/react';
import MHS2 from './MHS2';

test('renders learn react link', () => {
  render(<MHS2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
