import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Game, Home, Finish } from './screens';
import { Provider } from 'react-redux';
import store from './store';
import styles from './styles';

const background = require('./assets/background.png');

export default function App() {
  return (
    <ImageBackground source={background} style={styles.image}>
      <Provider store={store}>
        <Home/>
          {/* <Game/> */}
          {/* <Finish/> */}
      </Provider>
    </ImageBackground>
  );
}