import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {Colors} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView, {backgroundColor: '#dddddd'}]}>
      <Text style={[styles.text, {color: 'white'}]}>Hi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red100,
  },
  text: {fontSize: 20, color: Colors.blue200},
});
