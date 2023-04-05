import React from 'react';

class App extends React.Component {
  render() {
    return (
      <form>
        <input
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    );
  }
}

export default App;
