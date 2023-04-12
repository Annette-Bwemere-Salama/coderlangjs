import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#254441',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
