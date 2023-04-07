import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="counter">
      <div className="current-value">Current value: </div>
      <div className="buttons-wrapper">
        <div className="minus">Minus 1</div>
        <div className="plus">Plus 1</div>
      </div>
    </div>
  );
}

export default App;
