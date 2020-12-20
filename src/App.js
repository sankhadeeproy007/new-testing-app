import React from 'react';
import clsx from 'clsx';

import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';

function App() {
  return (
    <div
      className={clsx(
        'flex flex-col items-center p-8 bg-gray-100 min-h-screen'
      )}
      data-test="component-app"
    >
      <div
        className={clsx(
          'text-3xl font-semibold text-blue-900',
          'bg-blue-100 px-9 py-5 shadow-inner rounded-lg'
        )}
      >
        Word app
      </div>
      <Congrats success />
      <GuessedWords
        guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'agile', letterMatchCount: 1 },
        ]}
      />
    </div>
  );
}

export default App;
