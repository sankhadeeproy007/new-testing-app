import React from 'react';
import PropTypes from 'prop-types';

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const resetCurrentGuess = () => {
    console.log(secretWord, 'secretWord');
    setCurrentGuess('');
  };

  const handleGuessChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  return (
    <div data-test="input">
      <input
        type="text"
        value={currentGuess}
        onChange={handleGuessChange}
        data-test="input-box"
      />
      <button
        type="submit"
        data-test="submit-button"
        onClick={resetCurrentGuess}
      >
        Submit
      </button>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
