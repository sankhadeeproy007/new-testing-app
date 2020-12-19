import React from 'react';
import PropTypes from 'prop-types';

function Congrats({ success }) {
  return (
    <div data-test="congrats-component">
      {success && <div data-test="congrats-message">Congrats! Right word</div>}
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
