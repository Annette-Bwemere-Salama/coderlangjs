import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const {heigth, width} =  Dimensions.get('screen')
const myInputWidth = width * 0.8
const myInputHeigth = heigth * 0.6
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput>Username</TextInput>
      <TextInput>Email</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#254441',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
