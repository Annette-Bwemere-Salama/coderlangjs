import React from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <View style={{ backgroundColor: '#C8379D' ,width: width * 0.25,height: height * 0.25,}} />
      <View style={{ backgroundColor: '#E39A28' , width: width * 0.5,height: height * 0.25,}} />
      <View style={{ backgroundColor: '#1A8AAD' , width: width * 0.75,height: height * 0.25,}} />
      <View style={{ backgroundColor: 'red' , height: height * 0.25, width: width}} />
    </View>


    /**
     * exercise alignement de 4 elements
     * 
     * 
     */
    // <View style={{ flex: 1 , gap: 10, position: "fixed", padding: 5 }}>
    //   <View style={{ backgroundColor: '#C8379D' ,width: width ,height: height * 0.25,}} />
    //   <View style={{ backgroundColor: '#E39A28' , width: width ,height: height * 0.25,}} />
    //   <View style={{ backgroundColor: '#1A8AAD' , width: width ,height: height * 0.25,}} />
    //   <View style={{ backgroundColor: 'red' , height: height * 0.25, width: width}} />
    // </View>
  );
}
 