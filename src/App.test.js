import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my new code with CI-CD - new sonar cloud/i);
  expect(linkElement).toBeInTheDocument();
});


test('increment', async() => {
  render(<App />);
  const incromentButton =  screen.getByTestId("increment-btn");
  expect(incromentButton).toBeInTheDocument();
  userEvent.click(incromentButton)
  const counterVal = screen.getByTestId("increment-counter");
  expect(counterVal).toBeInTheDocument();
  expect(counterVal).toHaveTextContent(1);
});