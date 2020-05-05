import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Board } from './pages';
import { Provider } from 'react-redux';
import store from './store';

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6EECD',
    margin: '5%',
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 8,
    shadowOffset: {width:0, height:4}
  }
});
