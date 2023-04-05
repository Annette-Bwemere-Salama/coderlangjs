import React from 'react';

class App extends React.Component {
  state = {
    currentValue: 0,
  }

  updateValue = () => {
    const { currentValue } = this.state;
    this.setState({
      currentValue: currentValue + 1
    });
  };

  render() {
    const { currentValue } = this.state;

    return (
      <div>
        <h4>Current value: {currentValue}</h4>
        <button onClick={this.updateValue}>Update</button>
      </div>
    );
  }
}

export default App;
