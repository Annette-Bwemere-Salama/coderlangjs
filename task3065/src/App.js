import React from 'react';
import AgeCheckBox from './AgeCheckBox';

class App extends React.Component {
  state = {
    selectedAgeGroup: undefined
  }

  render() {
    return (
      <div>
        <h2>What is your age?</h2>
        <AgeCheckBox label="18-25" />
        <AgeCheckBox label="26-35" />
        <AgeCheckBox label="36-50" />
      </div>
    );
  }

}

export default App;
