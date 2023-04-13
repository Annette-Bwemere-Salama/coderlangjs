import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return <SafeAreaView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
