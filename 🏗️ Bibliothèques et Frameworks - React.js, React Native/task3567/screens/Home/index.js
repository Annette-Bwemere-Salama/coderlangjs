import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Here will be the home screen of our career boost app</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>Check CV section</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4730EB',
    padding: 4,
    borderRadius: 4,
    marginTop: 10,
  },
  buttonLabel: {
    color: 'white',
  },
});
