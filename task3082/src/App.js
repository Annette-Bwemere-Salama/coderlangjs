import React from 'react';
import User from './User';

class App extends React.Component {
  state = {
    users: [
      {name: 'John Doe', email: 'john.doe@thecoder.com', phone: '111-222-333'},
      {name: 'Jane Doe', email: 'jane.doe@thecoder.com', phone: '333-222-111'}
    ],
  };

  render() {
    return null;
  }
}

export default App;
