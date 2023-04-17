import React from 'react';

class App extends React.Component {
  state = {
    password: '',
    check: false,
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState(({password: value, check: false}));
  }

  handleButtonClick = () => this.setState({ check: true })

  render() {
    const { password, check } = this.state;

    return (
      <div>
        <input
          value={password}
          type="password"
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.handleButtonClick}>Check</button>
      </div>
    );
  }
}

export default App;
