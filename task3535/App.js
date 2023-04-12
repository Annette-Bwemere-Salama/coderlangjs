import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const { width} =  Dimensions.get('screen')
const myInputWidth = width * 0.8
const [email , setEmail] = React.useState("")
const [password , setPassword] = React.useState("")

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput onChangeText={setEmail} value={email} style={styles.inpuT} placeholder='Enter email'>Email</TextInput>
      <TextInput secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.inpuT} placeholder='Enter password'>password</TextInput>
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
  inpuT: {
    width: myInputWidth,
    height: 60,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ffffff",
    fontSize: 20,
    borderRadius: 10,
    placeholderTextColor: '#254441'
    
  }
});
