import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard } from '../store/actions/boardActions';

export default function Grid(props) {

    let newBoard = useSelector(state => state.boardReducer.board);
    let [cell, setCell] = useState(String(props.cell));
    // console.log(cell === '0'? true: false)
    let baris = props.baris;
    let kolom = props.kolom;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('ubah cell', cell)
        if (cell !== '' && cell !== '0') {
            // console.log('benar', cell)
            newBoard[baris][kolom] =  Number(cell);
            dispatch(setBoard(newBoard));
        }
    }, [cell])
    
    return (
        <View>
            <TextInput 
                style={[styles.boxInput, props.editable ? styles.bg1 : styles.bg2]} 
                value={cell} 
                keyboardType='number-pad'
                onChangeText={(text) => setCell(text)}
                maxLength={1}
                editable={props.editable}
            />
            {/* <Text>
                {JSON.stringify(cell)}
                {JSON.stringify(props.baris)}
                {JSON.stringify(props.kolom)}
            </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    boxInput: {
        borderWidth: 1,
        margin: 3,
    },
    bg1: {
        backgroundColor: '#fff',
    },
    bg2: {
        backgroundColor: '#D78161',
    }
})