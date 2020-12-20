import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function GuessedWords({ guessedWords }) {
  return (
    <div className="p-4 w-1/3">
      {guessedWords.length === 0 ? (
        <>
          <div
            data-test="empty-guessedwords-component"
            className={clsx('text-xl text-gray-700')}
          >
            No Guessed words
          </div>
          <div data-test="instructions">Try to guess a secret word!</div>
        </>
      ) : (
        <>
          <div
            data-test="guessedwords-component"
            className={clsx('text-2xl text-gray-700 my-2')}
          >
            Guessed words here!
          </div>
          <div
            data-test="guessedwords"
            className={clsx(
              'flex p-4 bg-gray-50 shadow-md rounded mt-4 flex-col',
              'hover:shadow-lg hover:bg-white hover:rounded-lg'
            )}
          >
            <div
              className={clsx(
                'flex py-2 text-xl text-gray-700 justify-between',
                'font-semibold border-b border-gray-700 mb-2'
              )}
            >
              <div>Guess</div>
              <div>Matching letters</div>
            </div>
            {guessedWords.map((guessedWord, index) => (
              <div
                data-test="guessedword"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={clsx(
                  'flex py-1 justify-between text-lg text-gray-900'
                )}
              >
                <div>{guessedWord.guessedWord}</div>
                <div>{guessedWord.letterMatchCount}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
