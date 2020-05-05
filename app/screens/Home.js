import React from 'react';
import { Text, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../store/actions/boardActions';
import styles from '../styles';

export default function Home() {

    let { nickname } = useSelector(state => state.boardReducer);
    
    return(
        <>
            <View style={[styles.container, styles.shadow]}>
                <Text>
                    Home
                </Text>
                
            </View>
        </>
    )
}