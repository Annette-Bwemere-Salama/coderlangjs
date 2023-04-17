import React from 'react';
import { StyleSheet, Text, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        React Native lets you create truly native apps and doesn't compromise your users'
        experiences. It provides a core set of platform agnostic native components like View, Text,
        and Image that map directly to the platform’s native UI building blocks.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56c7c0',
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: '#38277f',
    fontWeight: 'bold',
  },
});
