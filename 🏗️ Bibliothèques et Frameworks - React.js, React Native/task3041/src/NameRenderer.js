import React from 'react';

export default class NameRenderer extends React.Component {
 static getDerivedStateFromProps(props) {
   return {
     name: 
       `${props.firstName} ${props.lastName}`
   }
  }

  render() {
    return (
      <h1>{this.state.name}</h1>
    )
  }
}