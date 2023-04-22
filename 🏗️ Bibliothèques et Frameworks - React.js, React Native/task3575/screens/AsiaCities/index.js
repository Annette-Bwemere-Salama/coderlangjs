import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function AsiaCities() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Asia</Text>
      <Text style={styles.city}>1. Tokyo (Japan)</Text>
      <Text style={styles.city}>2. Delhi (India)</Text>
      <Text style={styles.city}>3. Shanghai (China)</Text>
      <Text style={styles.city}>4. Beijing (China)</Text>
      <Text style={styles.city}>5. Mumbai (India)</Text>
    </View>
  );
}
