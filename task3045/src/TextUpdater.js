import React from 'react';
import { saveData } from './helpers';

export default class TextUpdater extends React.Component {
  state = {
    text: "initial text"
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  render() {
    return (
      <div>
        <h2>Update text</h2>
        <textarea value={this.state.text} onChange={this.handleChange} />
        <div>
          <button onClick={this.props.forceRemount}>Unmount</button>
        </div>
      </div>
    );
  }
}