import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GameList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to our beautiful app</Text>
      <Text style={styles.terms}>Please, read our terms and conditions</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.buttonLabel}>Terms and conditions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    color: 'rgb(70,48,235)',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  terms: {
    color: '#30AE60',
  },
  button: {
    backgroundColor: 'rgb(70,48,235)',
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});
