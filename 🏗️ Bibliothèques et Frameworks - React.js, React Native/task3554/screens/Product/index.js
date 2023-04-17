import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Product({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Details</Text>
      <Text style={styles.description}>Intel Core i7-10700 2.9GHz / 16MB</Text>
      <Text style={styles.description}>Processor family: Intel Core i7</Text>
      <Text style={styles.description}>Connector type: Socket 1200</Text>
      <Text style={styles.description}>Number of cores: 8</Text>
      <Text style={styles.description}>
        Generation of Intel processors: 10th generation (Comet Lake)
      </Text>
      <View style={styles.buttonWrapper}>
        <Button title="Comments" />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Analogues" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginVertical: 4,
  },
  buttonWrapper: {
    paddingVertical: 4,
  },
});
