import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Text,
  Platform,
  Alert,
} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from './src/data';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;

const onIconPressed = () => Alert.alert('icon pressed');

export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.backgroundImage]}
        source={require('./src/assets/images/bg.png')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <Icon
          name="home"
          size={50}
          color={Colors.lightBlue500}
          onPress={onIconPressed}></Icon>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  backgroundImage: {flex: 1},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  padding10: {padding: 10},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
});
