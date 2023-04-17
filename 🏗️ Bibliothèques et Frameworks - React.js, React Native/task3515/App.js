import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.v0}>
      <View style={styles.v1}>
        <Text style={styles.v2text}>Header</Text>
      </View>
      <View style={styles.v3}>
        <View style={styles.v4}>
          <Text style={styles.v2text}>1</Text>
        </View>
        <View style={styles.v5}>
          <Text style={styles.v2text}>2</Text>
        </View>
      </View>
      <View style={styles.v6}>
        <Text style={styles.v2text}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  v0: {
    flex: 1
  },
  v1 :{
    flex: 1, backgroundColor: 'rgb(255, 198, 0)', justifyContent: 'center', alignItems: 'center' 
  },
  v2text :{
      fontSize: 24,
  },  v3 :{
    flex: 1, flexDirection: 'row'
  },  v4 :{
    flex: 1, backgroundColor: '#38287F', justifyContent: 'center', alignItems: 'center'
  },  v5 :{
    flex: 2, backgroundColor: 'rgb(29,104,208)', justifyContent: 'center', alignItems: 'center'
  },  v6 :{
    flex: 1, backgroundColor: '#1DBEBE', justifyContent: 'center', alignItems: 'center'
  }, 
})