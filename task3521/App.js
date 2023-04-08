import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.styVie}>
      <View style={styles.styVie1} />
      <View style={styles.styVie2} />
      {/* <View style={styles.styVie3} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  styVie: {
    height : "100%",
    flex : 1
  },
  styVie1: {
    backgroundColor: 'green', flex: 1,height: "10%"
  },  styVie2: {
    backgroundColor: 'red', flex: 2 
  },  styVie3: {
    backgroundColor: 'red', flex: 3 ,height: 30
  },
})