import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <View style={{ backgroundColor: '#5B37B6' }} />
      <View style={{ backgroundColor: '#C8379D' }} />
      <View style={{ backgroundColor: '#E39A28' }} />
      <View style={{ backgroundColor: '#1A8AAD' }} />
    </View>
  );
}
