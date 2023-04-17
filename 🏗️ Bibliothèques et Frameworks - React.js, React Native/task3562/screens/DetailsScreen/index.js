import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route: { params } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Directed by: {params.directedBy}</Text>
      <Text style={styles.description}>Running time: {params.runningTime}</Text>
      <Text style={styles.description}>Release Date: {params.releaseDate}</Text>
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
