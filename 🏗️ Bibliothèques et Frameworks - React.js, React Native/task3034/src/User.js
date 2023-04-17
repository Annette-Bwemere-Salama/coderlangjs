import React from 'react';

export default class User extends React.Component {
  render() {
    const { userName } = this.props
    return (
      <div>User: {userName}</div>
    )
  }
}