import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import styles from './styles';
import { Game, Home, Finish } from './screens';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}></Stack.Screen>
            <Stack.Screen name='Game' component={Game}></Stack.Screen>
            <Stack.Screen name='Finish' component={Finish}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Home/> */}
          {/* <Game/> */}
          {/* <Finish/> */}
      </Provider>
  );
}