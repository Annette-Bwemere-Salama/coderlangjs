import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function BackendScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Backend stack</Text>
      <View style={styles.list}>
        <Text>1. Node.js</Text>
        <Text>2. Express</Text>
        <Text>3. Mongo</Text>
        <Text>4. MySQL</Text>
      </View>
      <Button title="Check FE stack" />
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
