import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords({ guessedWords }) {
  return (
    <div>
      {guessedWords.length === 0 ? (
        <>
          <div data-test="empty-guessedwords-component">No Guessed words</div>
          <div data-test="instructions">
            Instructions for guessing words correctly!
          </div>
        </>
      ) : (
        <>
          <div data-test="guessedwords-component">Guessed words here!</div>
          <div data-test="guessedwords">
            {guessedWords.map((guessedWord, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div data-test="guessedword" key={index}>
                {guessedWord.guessedWord}
                <span>{guessedWord.letterMatchCount}</span>
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
    }),
  ).isRequired,
};

export default GuessedWords;
