import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';

const { width} =  Dimensions.get('screen')
const myInputWidth = width * 0.8

export default function App() {
  const [email , setEmail] = React.useState("")
  const [password , setPassword] = React.useState("")
  const [isPressed, setIsPressed] = useState(false)
  const [showText, setShowText] = useState(false)
  const onPressHandler = ()=>{<App/>}
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput placeholderTextColor="#254441" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.inpuT} placeholder='Enter password'>hello</TextInput>
      <TextInput placeholderTextColor="#254441" onChangeText={setEmail} value={email} style={styles.inpuT} placeholder='Enter email'>Email</TextInput>
    <TouchableOpacity  onPress={onPressHandler} style={styles.button} activeOpacity={0.75}>
      <Text   style={{fontWeight: "bold", fontSize: 20}}>Login</Text>
    </TouchableOpacity>
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
    
  },
  button: {
    backgroundColor: '#43AA8B',
    height: 60,
    width: myInputWidth,
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
