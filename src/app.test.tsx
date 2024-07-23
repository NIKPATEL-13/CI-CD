import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event'

import { render, screen } from '@testing-library/react';
import App from './App';


test('render app', () => {
  render(<App />)
  const Heading = screen.getByRole("heading")
  expect(Heading).toBeInTheDocument()
  expect(Heading).toHaveTextContent("Vite + React")
})

test('increment', () => {
  render(<App />);
  const incromentButton = screen.getByTestId("increment-btn");
  expect(incromentButton).toBeInTheDocument();
  screen.debug(incromentButton)
  userEvent.click(incromentButton)
  const counterVal = screen.getByTestId("increment-counter");
  expect(counterVal).toHaveTextContent('0');
});

function sum(a: number, b: number) {
  return a + b
}

test('sample sum app', async () => {
  expect(sum(1, 3)).toEqual(4)
})