import React, { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false);
  const handleConfirmAgreement = () => {};
  return (
    <View style={styles.container}>
      <Button title="Confirm agreement" onPress={() => handleConfirmAgreement()} />
      {show && <Text>You have agreed to become super developer</Text>}
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
