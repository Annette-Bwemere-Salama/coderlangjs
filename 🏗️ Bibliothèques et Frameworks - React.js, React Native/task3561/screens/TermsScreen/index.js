import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        You agree that by accessing the Site, you have read, understood, and agree to be bound by
        all of these Terms and Conditions. If you do not agree with all of these Terms and
        Conditions, then you are expressly prohibited from using the Site and you must discontinue
        use immediately.
      </Text>
      <Text />
      <Text style={styles.description}>
        Supplemental terms and conditions or documents that may be posted on the Site from time to
        time are hereby expressly incorporated herein by reference. We reserve the right, in our
        sole discretion, to make changes or modifications to these Terms and Conditions at any time
        and for any reason.{' '}
      </Text>
      <Text />
      <Text style={styles.description}>
        We will alert you about any changes by updating the “Last updated” date of these Terms and
        Conditions, and you waive any right to receive specific notice of each such change.{' '}
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
  description: {
    marginVertical: 10,
  },
});
