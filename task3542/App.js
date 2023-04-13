import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  renderPoems = () => {
    return (
      <>
        <Text style={styles.poemHeader}>So, we’ll go no more a roving</Text>
        <View style={styles.poem}>
          <View>
            <Text style={styles.poemRow}>So, we’ll go no more a roving</Text>
            <Text style={styles.poemRow}>So late into the night,</Text>
            <Text style={styles.poemRow}>Though the heart be still as loving,</Text>
            <Text style={styles.poemRow}>And the moon be still as bright.</Text>
            <Text></Text>
            <Text style={styles.poemRow}>For the sword outwears its sheath,</Text>
            <Text style={styles.poemRow}>And the soul wears out the breast,</Text>
            <Text style={styles.poemRow}>And the heart must pause to breathe,</Text>
            <Text style={styles.poemRow}>And love itself have rest.</Text>
            <Text></Text>
            <Text style={styles.poemRow}>Though the night was made for loving,</Text>
            <Text style={styles.poemRow}>And the day returns too soon,</Text>
            <Text style={styles.poemRow}>Yet we’ll go no more a roving</Text>
            <Text style={styles.poemRow}>By the light of the moon.</Text>
          </View>
        </View>
        <Text style={styles.poemHeader}>When We Two Parted</Text>
        <View style={styles.poem}>
          <View>
            <Text style={styles.poemRow}>When we two parted</Text>
            <Text style={styles.poemRow}>In silence and tears,</Text>
            <Text style={styles.poemRow}>Half broken-hearted</Text>
            <Text style={styles.poemRow}>To sever for years,</Text>
            <Text style={styles.poemRow}>Pale grew thy cheek and cold,</Text>
            <Text style={styles.poemRow}>Colder thy kiss;</Text>
            <Text style={styles.poemRow}>Truly that hour foretold</Text>
            <Text style={styles.poemRow}>Sorrow to this.</Text>
            <Text></Text>
            <Text style={styles.poemRow}>The dew of the morning</Text>
            <Text style={styles.poemRow}>Sank chill on my brow –</Text>
            <Text style={styles.poemRow}>It felt like the warning</Text>
            <Text style={styles.poemRow}>Of what I feel now.</Text>
            <Text style={styles.poemRow}>Thy vows are all broken,</Text>
            <Text style={styles.poemRow}>And light is thy fame;</Text>
            <Text style={styles.poemRow}>I hear thy name spoken,</Text>
            <Text style={styles.poemRow}>And share in its shame.</Text>
            <Text></Text>
            <Text style={styles.poemRow}>They name thee before me,</Text>
            <Text style={styles.poemRow}>A knell in mine ear;</Text>
            <Text style={styles.poemRow}>A shudder come o’er me –</Text>
            <Text style={styles.poemRow}>Why wert thou so dear?</Text>
            <Text style={styles.poemRow}>They know not I knew thee,</Text>
            <Text style={styles.poemRow}>Who knew thee too well –</Text>
            <Text style={styles.poemRow}>Long, long shall I rue thee,</Text>
            <Text style={styles.poemRow}>Too deeply to tell.</Text>
            <Text></Text>
            <Text style={styles.poemRow}>In secret we met –</Text>
            <Text style={styles.poemRow}>In silence I grieve,</Text>
            <Text style={styles.poemRow}>That thy heart could forget,</Text>
            <Text style={styles.poemRow}>Thy spirit deceive.</Text>
            <Text style={styles.poemRow}>If I should meet thee</Text>
            <Text style={styles.poemRow}>After long years,</Text>
            <Text style={styles.poemRow}>How should I greet thee? –</Text>
            <Text style={styles.poemRow}>With silence and tears.</Text>
          </View>
        </View>
      </>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>Lord Bayron's Poems</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#38277f',
  },
  poemHeader: {
    marginTop: 20,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 25,
  },
  poemRow: {
    fontSize: 18,
    marginVertical: 4,
  },
  poem: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
