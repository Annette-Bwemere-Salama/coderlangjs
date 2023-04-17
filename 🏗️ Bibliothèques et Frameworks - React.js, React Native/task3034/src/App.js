import React from 'react';
import User from './User';

class App extends React.Component {
  render() {
    const userName = "Tony Stark"
    return <User userName={userName}/>
  }
}
export default App;
