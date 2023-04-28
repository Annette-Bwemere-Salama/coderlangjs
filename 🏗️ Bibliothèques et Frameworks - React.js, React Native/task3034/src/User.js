import React from 'react';

export default class User extends React.Component {
  state = {
    userName:this.props.userName
  }
  // const { userName } = this.props
  render() {
    return (
      <div>User: {this.state.userName}</div>
    )
  }
}