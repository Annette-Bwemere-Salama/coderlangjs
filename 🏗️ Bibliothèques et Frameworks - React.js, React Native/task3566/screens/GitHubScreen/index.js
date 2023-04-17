import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function GitHubScreen({ route: { params } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        GitHub, Inc. is a provider of Internet hosting for software development and version control
        using Git. It offers the distributed version control and source code management (SCM)
        functionality of Git, plus its own features. It provides access control and several
        collaboration features such as bug tracking, feature requests, task management, continuous
        integration and wikis for every project.[3] Headquartered in California, it has been a
        subsidiary of Microsoft since 2018.
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
