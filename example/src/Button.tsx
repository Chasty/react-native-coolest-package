import React from 'react';
import { StyleSheet, View, Button as RNButton } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
};

export function Button({ title, onPress, color }: ButtonProps) {
  return (
    <View style={styles.container}>
      <RNButton title={title} onPress={onPress} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
