import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

const { width} = Dimensions.get('window')
const imageWidth = width* 0.8
export default function App() {
  return <View style={styles.container}>
    {/* <View style={styles.vie1}> */}
      <Image source={{ uri: "https://learn.coderslang.com/lecture-background-image.jpg"}} style={styles.imgS}/>
    {/* </View> */}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1, justifyContent: 'center', alignItems: 'center'

  },
  vie1:{
  },
  imgS:{
    flex: 1,
    width: imageWidth, 
    aspectRatio: 1,
    resizeMode: "contain"

  }
});
