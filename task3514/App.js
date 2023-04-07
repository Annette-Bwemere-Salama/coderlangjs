import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.month}>December</Text>
        <Text style={styles.month}>January</Text>
        <Text style={styles.month}>February</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.month}>March</Text>
        <Text style={styles.month}>April</Text>
        <Text style={styles.month}>May</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.month}>June</Text>
        <Text style={styles.month}>July</Text>
        <Text style={styles.month}>August</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.month}>September</Text>
        <Text style={styles.month}>October</Text>
        <Text style={styles.month}>November</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    width: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    backgroundColor: 'rgb(255, 198, 0)',
    margin: 5,
    padding: 10,
    flex: 1
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
   
  },
});
