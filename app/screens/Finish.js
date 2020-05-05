import React from 'react';
import { Text, Button, View, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../store/actions/boardActions';
import styles, { background } from '../styles';

export default function Finish({ navigation }) {

    let { nickname, status } = useSelector(state => state.boardReducer);

    const playAgain = () => {
        navigation.navigate('Home');
    }
    
    return(
        <>
            <ImageBackground source={background} style={styles.image}>
                <View style={[styles.container, styles.shadow]}>
                    <Text>
                        Hey {nickname},
                    </Text>
                    <Text>
                        your game is {status}
                    </Text>
                    <View style={styles.divPlay}> 
                        <Button onPress={playAgain} title='Play Again' style={styles.btnPlay}/>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}