import React from 'react';

class App extends React.Component {
  state = {
    value: ""
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    return <textarea value={this.state.value} onChange={this.handleChange} />;
  }
}

export default App;
