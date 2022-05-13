import './App.css';
import { useEffect, useState } from 'react';

const stopTimer = 5;

function Child({ counter }) {
  const [printCounter, setPrintCounter] = useState([]);

  const checkTimer = () => printCounter.length < stopTimer;

  useEffect(() => {
    const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

    names.reduce(function (allNames, name) {
      if (name in allNames) {
        allNames[name]++
      }
      else {
        allNames[name] = 1
      }
      return allNames
    }, {})
  });

  useEffect(() => {
    if (checkTimer()) {
      setTimeout(() => {
        setPrintCounter([...printCounter, printCounter.length + 1])
      }, 1000);
    }
  }, [printCounter, checkTimer]);

  return (
    <div className="App">
      <header className="App-header">
        Counter : {!checkTimer() && printCounter}
      </header>
    </div>
  );
}

export default Child;
