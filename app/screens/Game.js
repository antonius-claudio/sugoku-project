import React, { useEffect } from 'react';
import { Text, Button, View, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, getBoard, validateBoard, solveBoard, setNickname } from '../store/actions/boardActions';
import { Line } from '../components';
import styles, { background } from '../styles';

export default function Game({ route }) {

    let {board, status, boardEditable, nickname} = useSelector(state => state.boardReducer);
    let level = 'easy';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNickname(route.params.nickname));
        dispatch(setDifficulty(level));
        dispatch(getBoard());
    }, [])

    function newBoard() {
        dispatch(getBoard());
    }

    function validate() {
        console.log('masuk validateaa')
        dispatch(validateBoard(board));
        console.log('hasil validate', status)
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
                    }
                </View>
            </ImageBackground>
        </>
    )
}