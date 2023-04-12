import React from 'react';
import { Image, StyleSheet, Text, View, PixelRatio} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text>Screen content</Text>
      </View>
      <View style={styles.navbar}>
            <Image style={styles.imaG}  source={{ uri: 'https://learn.coderslang.com/home.png' }}  />
            <Image style={styles.imaG} source={{ uri: 'https://learn.coderslang.com/like.png' }} />  
            <Image style={styles.imaG} source={{ uri: 'https://learn.coderslang.com/search.png' }}/> 
            <Image style={styles.imaG} source={{ uri: 'https://learn.coderslang.com/profile.png' }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E39A28',
  },
  navbar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  imaG:{
    borderRadius: 5, 
    flex: 1 ,
     resizeMode: "center",
      height:"40px", width: "60px", 
      backgroundColor: "rgba(26, 138, 173, 0.49)",
      width: PixelRatio.getPixelSizeForLayoutSize(60),
      height: PixelRatio.getPixelSizeForLayoutSize(40)
  }
});
