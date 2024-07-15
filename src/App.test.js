import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my new code with CI-CD - new sonar cloud/i);
  expect(linkElement).toBeInTheDocument();
});
