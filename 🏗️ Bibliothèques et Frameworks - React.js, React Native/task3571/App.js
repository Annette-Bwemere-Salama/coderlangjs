import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Modal>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text>Something went wrong</Text>
            <Text>Please, try again later</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>Cause error</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#F44336',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalView: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
  },
});
