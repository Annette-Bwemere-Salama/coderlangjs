import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <input type={number} placeholder="How old are you?" />
        <button>Validate age</button>
      </div>
    );
  }
}

export default App;
