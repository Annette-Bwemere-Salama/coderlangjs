import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.styVie}>
      <View style={{ backgroundColor: 'green', flex: 1 }} />
      <View style={{ backgroundColor: 'red', flex: 2 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  styVie: {
    height : "100%"
  }
})