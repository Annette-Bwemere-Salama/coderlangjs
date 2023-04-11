import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  block: {
    height: 50,
  },
  block1: {
    width: '20%',
    flex: 1,
    backgroundColor: 'red',
  },
  block2: {
    width: '40%',
    flex: 2,
    backgroundColor: 'blue',
  },
  block3: {
    width: '60%',
    flex: 3,
    backgroundColor: 'green',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.block, styles.block1]} />
      <View style={[styles.block, styles.block2]} />
      <View style={[styles.block, styles.block3]} />
    </View>
  );
}