import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utils/sizing';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.historyText}>We have not Focused on anything</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.historyText}>Things we've Focused on:</Text>
        <FlatList data={history} renderItem={renderItem} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  historyText: {
    color: 'white',
    fontSize: fontSizes.lg,
    paddingLeft:spacing.sm
  },
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: 'white',
    paddingTop: spacing.sm,
  },
});
