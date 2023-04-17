import React from 'react';
import { View , Dimensions} from 'react-native';

const {width} = Dimensions.get('screen')
const moise =  width * 0.2;
const bene = width * 0.4;
const zoe = width * 0.6;

export default function App() {
  return (
    <View style={{flex: 1, flexDirection:"row"}}>
      <View style={{flex: 1,width: moise, backgroundColor: 'red'}} />
      <View style={{width:bene,flex:2, backgroundColor: 'blue',}} />
      <View style={{  width: zoe,flex:3, backgroundColor: 'green',}} />
    </View>
  );
}