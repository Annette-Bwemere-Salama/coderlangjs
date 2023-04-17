import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { componentName: "App" };
    }
  
    render() {
      return (
        <h1>This is the {this.state.componentName} component</h1>
      );
    }
  }
export default App;
