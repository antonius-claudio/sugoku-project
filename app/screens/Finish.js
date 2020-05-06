import React from 'react';
import { Text, Button, View, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../store/actions/boardActions';
import styles, { background } from '../styles';

export default function Finish({ navigation, route }) {

    let { nickname, status } = useSelector(state => state.boardReducer);

    const playAgain = () => {
        navigation.navigate('Home');
    }
    
    return(
        <>
            <ImageBackground source={background} style={styles.image}>
                <View style={[styles.container, styles.shadow]}>
                    <Text style={styles.finish1}>
                        Hey {nickname},
                    </Text>
                    <Text>
                        <Text style={styles.finish2}>your game is </Text><Text style={styles.finish21}>{status}</Text>,
                    </Text>
                    <Text style={styles.finish3}>
                        in {route.params.min < 10 ? `0${route.params.min}` : route.params.min}:{route.params.sec < 10 ? `0${route.params.sec}` : route.params.sec}
                    </Text>
                    <View style={styles.divPlay}> 
                        <Button onPress={playAgain} title='Play Again' style={styles.btnPlay}/>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}