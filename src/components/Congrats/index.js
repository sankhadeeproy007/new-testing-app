import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Congrats({ success }) {
  return (
    <div data-test="congrats-component">
      {success && (
        <div
          data-test="congrats-message"
          className={clsx('p-2 my-3 text-2xl text-green-600 font-semibold')}
        >
          Congrats! You guessed right.
        </div>
      )}
    </div>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool,
};

Congrats.defaultProps = {
  success: false,
};

export default Congrats;
