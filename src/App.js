import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PdfPrinter from './PdfPrinter';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my new code with CI-CD - new sonar cloud
        </a>
        <PdfPrinter />
        <span data-testid='increment-counter'>{counter}</span>
        <input type="button" data-testid='increment-btn' value={"Increment"} onClick={() => setCounter(counter + 1)} />
      </header>
    </div>
  );
}

export default App;
