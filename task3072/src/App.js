import React from 'react';

class App extends React.Component {
  state = {
    showContent: false
  };

  render() {
    const { showContent } = this.state;

    return (
      <div>
        <h2 id="heading" onClick={() => this.setState({ showContent: !showContent })}>London</h2>
        <div id="content">London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones.</div>
      </div>
    );
  }
}

export default App;
