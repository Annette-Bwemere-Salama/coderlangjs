import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function FrontendScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Frontend stack</Text>
      <View style={styles.list}>
        <Text>1. HTML, CSS</Text>
        <Text>2. JS</Text>
        <Text>3. React, React-native</Text>
        <Text>4. Styled components</Text>
      </View>
      <Button title="Check BE stack" />
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
