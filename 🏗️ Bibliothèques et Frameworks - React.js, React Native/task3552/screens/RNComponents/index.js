import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RNComponents() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Components</Text>
      <View style={styles.list}>
        <Text>1. View</Text>
        <Text>2. Button</Text>
        <Text>3. FlatList</Text>
        <Text>4. Pressable</Text>
        <Text>5. SectionList</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
  },
});
