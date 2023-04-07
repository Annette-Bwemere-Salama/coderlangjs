import React from 'react';
import './styles.css';
import { getWinnerNumber } from './getWinnerNumber';

function App() {
  return (
    <div className="lottery-ticket">
      <div className="lottery-inner">
        <div className="lotto-title">
          <span>Lotto</span>
          <i>Ticket</i>
        </div>
        <hr />
        <div className="lotto-content">
          <div className="ticket-information">
            <div>And the winner is ticker with number</div>
            <div className="ticket-number">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
