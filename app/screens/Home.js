import React, { useState } from 'react';
import { Text, Button, View, TextInput, ImageBackground, Modal, TouchableHighlight, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../store/actions/boardActions';
import styles, { background } from '../styles';

export default function Home({ navigation }) {
    // let { nickname } = useSelector(state => state.boardReducer);
    let [nickname, setNickname] = useState('');
    // let [valid, setValid] = useState(false);

    const playGame = () => {
        if (nickname === '' || !nickname) {
            // setValid(true);
            Alert.alert('Oops!', 'Type your nickname', [
                {text: 'Okay', onPress: () => console.log('alert closed')}
            ])
        } else {
            navigation.navigate('Game', {
                nickname
            });
        }
    }
    
    return(
        <>
            <ImageBackground source={background} style={styles.image}>
                <View style={[styles.containerHome, styles.shadow]}>
                    <Text style={styles.welcome}>
                        Welcome
                    </Text>
                    <Text style={styles.please}>
                        please insert your nickname
                    </Text>
                    <TextInput 
                        style={styles.inputNick}
                        value={nickname} 
                        onChangeText={(text) => setNickname(text)}
                        maxLength={10}
                        autoCapitalize='characters'
                    />
                    <View style={styles.divPlay}> 
                        <Button onPress={playGame} title='Play Game' style={styles.btnPlay}/>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}