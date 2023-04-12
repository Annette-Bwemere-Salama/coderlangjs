import React, { useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [value, setValue] = useState('');
  const onChange = e=> setValue(e.target.value)
  return (
    <View style={styles.container}>
      <TextInput value={value} onChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56c7c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 30,
    borderWidth: 2,
    borderColor: '#ffb900',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: 0.8 * Dimensions.get('screen').width,
  },
});
