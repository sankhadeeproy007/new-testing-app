import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

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
    <div data-test="input" className={clsx('p-5 flex')}>
      <input
        data-test="input-box"
        type="text"
        value={currentGuess}
        onChange={handleGuessChange}
        className={clsx(
          'p-1 mx-3 rounded-md shadow-md',
          'border border-transparent focus:outline-none focus:ring-2',
          'focus:ring-blue-600 focus:border-transparent'
        )}
      />
      <button
        type="submit"
        data-test="submit-button"
        onClick={resetCurrentGuess}
        className={clsx(
          'bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded-md shadow-md',
          'focus:outline-none focus:ring-2 text-white font-semibold',
          'focus:ring-blue-600 focus:ring-opacity-50'
        )}
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
