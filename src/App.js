import React from 'react';

import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';

import './App.css';

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1>Word app</h1>
      <Congrats />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
