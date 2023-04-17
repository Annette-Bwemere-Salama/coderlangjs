// import { Component } from "react";
import React, {Component} from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "I am class components master" };
      }

    render(){
    return(
        <div>{this.state.text}</div>
    )}
}
export default App;

