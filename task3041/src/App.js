import React from 'react';
import NameRenderer from './NameRenderer';

function App() {
  return (
    <div>
      <NameRenderer firstName='John' lastName='Doe'/>
      <NameRenderer firstName='Jane' lastName='Doe'/>
    </div>
  )
}

export default App;
