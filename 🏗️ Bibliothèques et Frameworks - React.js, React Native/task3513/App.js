import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.flexB}>
      <View style={styles.blueBox}></View >
      <View style={styles.greenBox}></View>
      <View style={styles.yellowBox}></View>
    </View>


  );
}

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "blue",
    flex: 1
  },
  greenBox : {
    backgroundColor: "green",
    flex: 1
  },
  yellowBox : {
    backgroundColor: "yellow",
    flex: 1
  },
  flexB :{
        flex: 1
  }
})