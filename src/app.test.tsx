import { expect, test } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import App from './App';
// import '@testing-library/jest-dom';


// test('render app', async () => {
//   render(<App />)
//   const Headeing = await screen.findByText(/Vite + React/i)
//   console.log(Headeing);

//   expect(Headeing).toBeInTheDocument()
// })

// test('increment', async() => {
//   render(<App />);
//   const incromentButton =  screen.getByTestId("increment-btn");
//   expect(incromentButton).toBeInTheDocument();
//   userEvent.click(incromentButton)
//   const counterVal = screen.getByTestId("increment-counter");
//   expect(counterVal).toBeInTheDocument();
//   expect(counterVal).toHaveTextContent(1);
// });

function sum(a: number, b: number) {
  return a + b
}

test('sample sum app', async () => {
  expect(sum(1, 3)).toEqual(4)
})