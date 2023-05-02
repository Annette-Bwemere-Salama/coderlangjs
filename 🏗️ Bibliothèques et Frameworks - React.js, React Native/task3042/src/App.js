import React from 'react';

class App extends React.Component {
  state = {
    currentValue: 0,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentValue > 4;
  }

  updateValue = () => {
    this.setState(state => ({
      currentValue: state.currentValue + 1
    }));
  }

  render() {
    const { currentValue } = this.state;

    return (
      <div>
        <h4>Current value: {this.state.currentValue}</h4>
        <button onClick={this.updateValue}>Update</button>
        {/* <p>Current value: {this.state.currentValue}</p> */}
      {/* </div> */}
      </div>
    );
  }
}

export default App;
