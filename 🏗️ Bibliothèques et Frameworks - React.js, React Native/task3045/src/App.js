import React from 'react';
import TextUpdater from './TextUpdater';

class App extends React.Component {
  state = {
    currentKey: 1
  };

  forceRemount = () => {
    this.setState({ currentKey: this.state.currentKey + 1 });
  };

  render() {
    return (
      <TextUpdater
        key={this.state.currentKey}
        forceRemount={this.forceRemount}
      />
    );
  }
}

export default App;
