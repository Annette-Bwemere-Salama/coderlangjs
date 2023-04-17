import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput value={name} onChangeText={text => setName(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
