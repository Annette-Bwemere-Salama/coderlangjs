import React from 'react';

function App() {
  return (
    <main>
      {['do', 're', 'mi', 'fa', 'sol', 'la', 'si'].map(
        note => <h2 key={note}>{note}</h2>
      )}
    </main>
  )
}

export default App;
