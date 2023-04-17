import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import github from '../../assets/github.png';
import gitlab from '../../assets/gitlab.png';

export default function TabBarIcon({ routeName, focused }) {
  return (
    <View style={[styles.container, { backgroundColor: focused ? '#D6DBD2' : '#F2F5EA' }]}>
      <Image style={styles.icon} source={routeName === 'Github' ? github : gitlab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
