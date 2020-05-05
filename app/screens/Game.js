import React, { useEffect, useState } from 'react';
import { Text, Button, View, ImageBackground, Picker } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, getBoard, validateBoard, solveBoard, setNickname, setStatus } from '../store/actions/boardActions';
import { Line } from '../components';
import styles, { background } from '../styles';

export default function Game({ route, navigation }) {

    let {board, status, nickname} = useSelector(state => state.boardReducer);
    let [level, setLevel] = useState('easy');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNickname(route.params.nickname));
        dispatch(setStatus('unsolved'));
        dispatch(setDifficulty(level));
        dispatch(getBoard());
    }, [])

    useEffect(() => {
        dispatch(setDifficulty(level));
        dispatch(getBoard());
    }, [level])

    function newBoard() {
        dispatch(getBoard());
    }

    function validate() {
        console.log('masuk validateaa')
        dispatch(validateBoard(board))
        // setTimeout(function () {
            console.log('hasil validate11111111', status)
            navigation.navigate('Finish');
        // }, 2000);

    }

    function solve() {
        console.log('masuk solvefdsfsd')
        dispatch(solveBoard(board));
        console.log('hasil solve status', status)
    }
    console.log('render')
    return(
        <>
            <ImageBackground source={background} style={styles.image}>
                <View style={[styles.container, styles.shadow]}>
                    <Text style={styles.name}>
                        Hi, {nickname}
                    </Text>
                    {/* <Text>
                        {JSON.stringify(board)}
                    </Text>
                    <Text>
                    {JSON.stringify(boardEditable)}
                    </Text> */}
                    {board.length === 0 && <Text>Wait a sec ...</Text>}
                    {/* {JSON.stringify(board)} */}
                    {board.length !== 0 && board.map((line, index) => <Line key={index} line={line} baris={index}/>)}
                    {board.length !== 0 && 
                        <>
                            <Picker
                                selectedValue={level}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setLevel(itemValue)}
                            >
                                <Picker.Item label="easy" value="easy" style={styles.itemPicker}/>
                                <Picker.Item label="medium" value="medium" style={styles.itemPicker}/>
                                <Picker.Item label="hard" value="hard" style={styles.itemPicker}/>
                                <Picker.Item label="random" value="random" style={styles.itemPicker}/>
                            </Picker>
                            <View style={styles.viewBtn}>
                                <View style={styles.btnGame}>
                                    <Button onPress={newBoard} title='new' />
                                </View>
                                <View style={styles.btnGame}>
                                    <Button onPress={validate} title='Validate' />
                                </View>
                                <View style={styles.btnGame}>
                                    <Button onPress={solve} title='Solve' />
                                </View>
                            </View>
                        </>
                    }
                </View>
            </ImageBackground>
        </>
    )
}