import React from 'react';
import AccordionBody from './AccordionBody';
import './styles.css';

function App() {
  const [showBody, setShowBody] = React.useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setShowBody(!showBody)}>
        testing-library
        <div className="open-close">{showBody ? 'close' : 'open'}</div>
      </div>
      {showBody && <AccordionBody />}
    </div>
  );
}

export default App;
