import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const games = [
  {
    id: 1,
    name: 'Spider Man',
    platform: 'PS4',
    publisher: 'SIE (Sony Interactive Entertainment)',
  },
  {
    id: 2,
    name: 'Mortal Kombat',
    platform: 'XBox',
    publisher: 'Warner Bros. Games',
  },
];

export default function GameList() {
  return (
    <View style={styles.container}>
      {games.map((item) => (
        <View style={styles.item} key={item.id}>
          <Text>{item.name}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>View details</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  item: {
    marginBottom: 10,
    padding: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4730EB',
    padding: 4,
    borderRadius: 4,
  },
  buttonLabel: {
    color: 'white',
  },
});
