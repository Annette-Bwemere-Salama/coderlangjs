import React from 'react';

export default class NameRenderer extends React.Component {
  state = {
    name: ''
  }

  render() {
    return (
      <h1>{this.state.name}</h1>
    )
  }
}