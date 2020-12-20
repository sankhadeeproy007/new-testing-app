import React from 'react';
import PropTypes from 'prop-types';

function Input({ secretWord }) {
  console.log(secretWord);
  const [currentGuess, setCurrentGuess] = React.useState('');
  return (
    <div data-test="input">
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
        data-test="input-box"
      />
      <button type="submit" data-test="submit-button">
        Submit
      </button>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
