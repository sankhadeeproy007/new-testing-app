import React from 'react';

function Congrats({ success }) {
  return (
    <div data-test="congrats-component">
      {success && <div data-test="congrats-message">Congrats! Right word</div>}
    </div>
  );
}

export default Congrats;
