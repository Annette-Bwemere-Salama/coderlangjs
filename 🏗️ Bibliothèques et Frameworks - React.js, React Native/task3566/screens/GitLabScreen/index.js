import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GitLabScreen({ route: { params } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing
        wiki, issue-tracking and continuous integration and deployment pipeline features, using an
        open-source license, developed by GitLab Inc. The software was created by Ukrainian
        developers Dmitriy Zaporozhets and Valery Sizov.
      </Text>
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
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    color: '#4730EB',
    marginBottom: 8,
    fontSize: 14,
  },
});
