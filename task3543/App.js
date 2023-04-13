import React from 'react';
import { Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';

const data = ['Tomoto', 'Cheese', 'Onion'];

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Pizza ingredients</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  item: {
    width: Dimensions.get('screen').width,
    height: 100,
    padding: 20,
  },
  itemText: {
    color: '#fff',
    backgroundColor: '#f4bc40',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
    paddingLeft: 20,
  },
});

export default App;
