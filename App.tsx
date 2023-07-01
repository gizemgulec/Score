import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber);
  } 

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber) {
    screen = <GameScreen/>
  }


  return (
    <View style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/dices.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.dicesImage}
      >
        {/* <StartGameScreen onPickNumber={pickedNumberHandler}/> */}
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex :1,
    //opacity: 0.20,
    //backgroundColor: '#ddb52f'
  },
  dicesImage: {
    opacity: 0.20,
    backgroundColor: '#ddb52f'
  }
});
