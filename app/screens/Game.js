import React, { useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, getBoard, validateBoard, solveBoard } from '../store/actions/boardActions';
import { Line } from '../components';
import styles from '../styles';

export default function Game() {

    let {board, status, boardEditable} = useSelector(state => state.boardReducer);
    let level = 'easy';
    const dispatch = useDispatch();

    useEffect(() => {
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
            <View style={[styles.container, styles.shadow]}>
                <Text>
                    Board
                </Text>
                <Text>
                    {JSON.stringify(board)}
                </Text>
                <Text>
                {JSON.stringify(boardEditable)}
                </Text>
                    {board.length === 0 && <Text>Wait a sec ...</Text>}
                    {/* {JSON.stringify(board)} */}
                    {board.length !== 0 && board.map((line, index) => <Line key={index} line={line} baris={index}/>)}
                <View style={styles.viewBtn}>
                    <Button onPress={newBoard} title='new' />
                    <Button onPress={validate} title='Validate' />
                    <Button onPress={solve} title='Solve' />
                </View>
            </View>
        </>
    )
}