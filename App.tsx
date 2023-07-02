import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
