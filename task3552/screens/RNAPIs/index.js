import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RNAPIs() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native APIs</Text>
      <View style={styles.list}>
        <Text>1. Dimensions</Text>
        <Text>2. StyleSheet</Text>
        <Text>3. PixelRatio</Text>
        <Text>4. Platform</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
  },
});
