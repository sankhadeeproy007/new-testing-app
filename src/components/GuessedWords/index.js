import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords({ guessedWords }) {
  return (
    <div>
      {guessedWords.length === 0 && (
        <>
          <div data-test="empty-guessedwords-component">No Guessed words</div>
          <div data-test="instructions">Instructions!</div>
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
