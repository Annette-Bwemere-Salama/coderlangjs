import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leave you feedback</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#56c7c0',
  },
  header: {
    fontSize: 18,
  },
  input: {
    marginVertical: 30,
    borderWidth: 2,
    borderColor: '#ffb900',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: 0.8 * Dimensions.get('screen').width,
  },
});
