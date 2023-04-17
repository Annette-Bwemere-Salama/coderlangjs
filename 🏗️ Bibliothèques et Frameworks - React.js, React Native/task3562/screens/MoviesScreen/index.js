import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const movies = [
  {
    id: 1,
    name: 'Avengers: Endgame',
    directedBy: 'Anthony Russo, Joseph Russo',
    runningTime: '181 minutes',
    releaseDate: 'April 22, 2019',
  },
  {
    id: 2,
    name: 'Avatar ',
    directedBy: 'James Francis Cameron',
    runningTime: '162 minutes',
    releaseDate: 'December 10, 2009',
  },
];

export default function MoviesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {movies.map((item) => (
        <View style={styles.item} key={item.id}>
          <Text>{item.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', item)}
          >
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
