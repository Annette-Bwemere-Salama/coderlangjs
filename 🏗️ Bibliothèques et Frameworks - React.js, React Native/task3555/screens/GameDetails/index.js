import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameDetails() {
  if (!params && !params.id) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{params.name}</Text>
      <Text style={styles.description}>Platform: {params.platform}</Text>
      <Text style={styles.description}>Publisher: {params.publisher}</Text>
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
    color: '#4730EB',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    marginVertical: 10,
  },
});
