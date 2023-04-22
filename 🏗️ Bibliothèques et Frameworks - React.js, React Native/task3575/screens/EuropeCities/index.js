import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function EuropeCities() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Europe</Text>
      <Text style={styles.city}>1. Istanbul (Turkey)</Text>
      <Text style={styles.city}>2. Moscow (Russia)</Text>
      <Text style={styles.city}>3. Paris (France)</Text>
      <Text style={styles.city}>4. London (United Kingdom)</Text>
      <Text style={styles.city}>5. Madrid (Spain)</Text>
    </View>
  );
}
