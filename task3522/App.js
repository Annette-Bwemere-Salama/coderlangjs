import React from 'react';
import { View } from 'react-native';

// const {width, heigth} = Dimensions.get('screen')

export default function App() {
  return (
    <View style={{flex: 1, flexDirection:"row"}}>
      <View style={{flex: 1,width: "20%", backgroundColor: 'red'}} />
      <View style={{width: "40%",flex: 2,backgroundColor: 'blue',}} />
      <View style={{  width: "60%",flex: 3,backgroundColor: 'green',}} />
    </View>
  );
}