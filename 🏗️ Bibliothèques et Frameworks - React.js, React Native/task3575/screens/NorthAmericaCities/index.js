import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function NorthAmericaCities() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>North America</Text>
      <Text style={styles.city}>1. Mexico City (Mexica)</Text>
      <Text style={styles.city}>2. New York City (USA)</Text>
      <Text style={styles.city}>3. Los Angeles (USA)</Text>
      <Text style={styles.city}>4. Toronto (Canada)</Text>
      <Text style={styles.city}>5. Chicago (USA)</Text>
    </View>
  );
}
