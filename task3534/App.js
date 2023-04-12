import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  state = {
    touches: 0,
  };

  handleTouch = () => {
    this.setState(({ touches }) => ({ touches: touches + 1 }));
  };

  render() {
    return <View style={styles.container}></View>;
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
