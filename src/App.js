import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useState } from 'react';

function App() {
  const [counter] = useState(0);

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
          This is my new code with CI-CD
        </a>
      </header>
      <Child counter={counter} />
    </div>
  );
}

export default App;
