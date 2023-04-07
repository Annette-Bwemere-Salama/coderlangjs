import React from 'react';
import './styles.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <div>Hi!</div>
      <input
        type="text"
        placeholder="email"
      />
      <input
        type="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>login</button>
    </form>
  );
}

export default App;
