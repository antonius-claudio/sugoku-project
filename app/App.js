import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Board } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import styles from './styles';

const background = require('./assets/background.png');

export default function App() {
  return (
    <ImageBackground source={background} style={styles.image}>
      <Provider store={store}>
        <View style={[styles.container, styles.shadow]}>
          <Board/>
        </View>
      </Provider>
    </ImageBackground>
  );
}