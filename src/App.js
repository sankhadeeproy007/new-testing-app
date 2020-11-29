import React, { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App" data-test="component-app">
      <h1>Testing react</h1>
      <h2 data-test="counter-display">{count}</h2>
      <button onClick={incrementCounter} data-test="increment-button">
        Increment counter
      </button>
    </div>
  );
}

export default App;
