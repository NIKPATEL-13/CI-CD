import { useState } from 'react';
import './App.css';
import PdfPrinter from './PdfPrinter';
import Assets from './assets/Assets';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Assets.Logos.ViteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Assets.Logos.ReactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type='button' data-testid="increment-btn" onClick={() => setCount((count) => count + 1)}>
          <span data-testid="increment-counter">{count}</span>
        </button>
        <PdfPrinter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h1>Huureeyyyyy</h1>
      </div>
    </>
  )
}

export default App
