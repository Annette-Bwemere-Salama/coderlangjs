import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class App extends Component {
  state = {
    touches: 0,
  };

  handleTouch = () => {
    this.setState(({ touches }) => ({ touches: touches + 1 }));
  };

  render() {
    return <View style={styles.container}>
      <Button onPress={this.handleTouch} title='Click me'>Click me</Button>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56c7c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
