import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
export const Timing = ({ onTimeChange }) => {
  return (
    <>
      <View style={styles.btnWrapper}>
        <RoundedButton
          title="10"
          size={75}
          onPress={() => {
            onTimeChange(10);
          }}
        />
      </View>
      <View style={styles.btnWrapper}>
        <RoundedButton
          title="15"
          size={75}
          onPress={() => {
            onTimeChange(15);
          }}
        />
      </View>
      <View style={styles.btnWrapper}>
        <RoundedButton
          title="20"
          size={75}
          onPress={() => {
            onTimeChange(20);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
