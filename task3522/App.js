import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#5B37B6', width: 0.2 * width }} />
      <View style={{ backgroundColor: '#C8379D', width: 0.4 * width }} />
      <View style={{ backgroundColor: '#E39A28', width: 0.6 * width }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
