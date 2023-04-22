import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function App() {
  const handleSendRequest = () => {};
  return (
    <View style={styles.container}>
      <Button title="Send request" onPress={() => handleSendRequest()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
