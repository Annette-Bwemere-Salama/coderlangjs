import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function CanadaProvincesScreen({ route: { params } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Canada - Provinces and territories</Text>
      <ScrollView>
        <Text>Alberta</Text>
        <Text>British Columbia</Text>
        <Text>Manitoba</Text>
        <Text>New Brunswick</Text>
        <Text>Newfoundland and Labrador</Text>
        <Text>Northwest Territories</Text>
        <Text>Nova Scotia</Text>
        <Text>Nunavut</Text>
        <Text>Ontario</Text>
        <Text>Prince Edward Island</Text>
        <Text>Quebec</Text>
        <Text>Saskatchewan</Text>
        <Text>Yukon</Text>
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
