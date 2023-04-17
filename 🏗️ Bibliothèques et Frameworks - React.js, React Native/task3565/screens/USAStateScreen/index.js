import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function USAStateScreen({ route: { params } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>USA states</Text>
      <ScrollView>
        <Text>Alabama, Montgomery</Text>
        <Text>Alaska, Juneau</Text>
        <Text>Arizona, Phoenix</Text>
        <Text>Arkansas, Little Rock</Text>
        <Text>California, Sacramento</Text>
        <Text>Colorado, Denver</Text>
        <Text>Connecticut, Hartford</Text>
        <Text>Delaware, Dover</Text>
        <Text>Florida, Tallahassee</Text>
        <Text>Georgia, Atlanta</Text>
        <Text>Hawaii, Honolulu</Text>
        <Text>Idaho, Boise </Text>
        <Text>Illinois, Springfield </Text>
        <Text>Indiana, Indianapolis </Text>
        <Text>Iowa, Des Moines </Text>
        <Text>Kansas, Topeka</Text>
        <Text>Kentucky, Frankfort </Text>
        <Text>Louisiana, Baton Rouge</Text>
        <Text>Maine, Augusta</Text>
        <Text>Maryland, Annapolis</Text>
        <Text>Massachusetts, Boston</Text>
        <Text>Michigan, Lansing</Text>
        <Text>Minnesota, Saint Paul</Text>
        <Text>Mississippi, Jackson</Text>
        <Text>Missouri, Jefferson City</Text>
        <Text>Montana, Helena</Text>
        <Text>Nebraska, Lincoln</Text>
        <Text>Nevada, Carson City</Text>
        <Text>New Hampshire, Concord</Text>
        <Text>New Jersey, Trenton</Text>
        <Text>New Mexico, Santa Fe</Text>
        <Text>New York, Albany</Text>
        <Text>North Carolina, Raleigh</Text>
        <Text>North Dakota, Bismarck</Text>
        <Text>Ohio, Columbus</Text>
        <Text>Oklahoma, Oklahoma City</Text>
        <Text>Oregon, Salem</Text>
        <Text>Pennsylvania, Harrisburg</Text>
        <Text>Rhode Island, Providence</Text>
        <Text>South Carolina, Columbia</Text>
        <Text>South Dakota, Pierre</Text>
        <Text>Tennessee, Nashville</Text>
        <Text>Texas, Austin</Text>
        <Text>Utah, Salt Lake City</Text>
        <Text>Vermont, Montpelier</Text>
        <Text>Virginia, Richmond</Text>
        <Text>Washington, Olympia</Text>
        <Text>West Virginia, Charleston</Text>
        <Text>Wisconsin, Madison</Text>
        <Text>Wyoming, Cheyenne</Text>
      </ScrollView>
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
});
