import React, { useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, getBoard } from '../store/actions/boardActions';
import { Line } from '../components';
import styles from '../styles';

export default function Board() {

    let board = useSelector(state => state.boardReducer.board);
    let level = 'easy';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDifficulty(level));
        dispatch(getBoard());
    }, [])

    function validate() {
        console.log('masuk validateaa')

    }

    function solve() {
        console.log('masuk solvefdsfsd')
    }

    return(
        <>
            <Text>
                Board
            </Text>
            <Text>
                {board.length === 0 && <Text>Wait a sec ...</Text>}
            </Text>
                {board.map((line, index) => <Line key={index} line={line} baris={index}/>)}
            <View style={styles.viewBtn}>
                <Button onPress={validate} title='Validate' />
                <Button onPress={solve} title='Solve' />
            </View>
        </>
    )
}