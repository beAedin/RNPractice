import React from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width} px</Text>
      <Text style={[styles.text]}>height: {height} px</Text>

      <View style={[styles.box, styles.border]}></View>
      <View style={[styles.box, styles.border, {borderRadius: 20}]}></View>
      <View
        style={[
          styles.box,
          styles.border,
          {borderTopLeftRadius: 40, borderBottomLeftRadius: 40},
        ]}></View>
    </SafeAreaView>
  );
}
// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, 
  // height: height,
  // height: '100%',
  flex: 1,
  // padding: 10
  paddingLeft: Platform.select({ios: 0, android: 20})
},
  text: {marginLeft: 10, fontSize: 20,  marginTop: 20},
  box: {width: '70%', height: 100, backgroundColor: 'white', marginBottom: 10,
  marginLeft: Platform.select({ios: 20, android: 0})},
  border: {borderWidth:10, borderColor: Colors.lime500},
});
