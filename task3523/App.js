import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <View style={{ backgroundColor: '#5B37B6' , height: height * 0.25,}} />
      <View style={{ backgroundColor: '#C8379D' ,width: width * 0.75,height: height * 0.25,}} />
      <View style={{ backgroundColor: '#E39A28' , width: width * 0.5,height: height * 0.25,}} />
      <View style={{ backgroundColor: '#1A8AAD' , width: width * 0.25,height: height * 0.25,}} />
    </View>
  );
}
 