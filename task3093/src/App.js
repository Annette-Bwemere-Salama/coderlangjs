import React from 'react';
import FormElement from './FormElement';

class App extends React.Component {
  state = {
    password: '',
    email: ''
  }

  onPasswordChange = ({ target: { value } }) => this.setState({ password: value });

  onEmailChange = ({ target: { value } }) => this.setState({ email: value });

  render() {
    const { password, email } = this.state;
    return (
      <form>
        <FormElement
          elementId="password-input"
          type='password'
          value={password}
          handleChange={this.onPasswordChange}
        />
        <FormElement
          elementId="email-input"
          value={email}
          label='Email'
          handleChange={this.onEmailChange}
        />
      </form>
    );
  }

}

export default App;
