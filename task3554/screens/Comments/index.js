import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Comments({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comments</Text>
      <Text style={styles.description}>John D: Very hot</Text>
      <Text style={styles.description}>Jack S: The best processor!</Text>
      <Text style={styles.description}>Intel Core i9-10900 2.8 GHz / 20 MB</Text>
      <View style={styles.buttonWrapper}>
        <Button title="Back" />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Main" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginVertical: 4,
  },
  buttonWrapper: {
    paddingVertical: 4,
  },
});
