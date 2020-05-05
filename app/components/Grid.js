import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBoard } from '../store/actions/boardActions';
import styles from '../styles';

export default function Grid(props) {

    let board = useSelector(state => state.boardReducer.board);
    let newpushBoard = JSON.parse(JSON.stringify(board));
    let [cell, setCell] = useState(String(props.cell));
    let baris = props.baris;
    let kolom = props.kolom;
    const dispatch = useDispatch();

    useEffect(() => {
        if (cell !== '' && cell !== '0') {
            // newpushBoard[baris][kolom] =  Number(cell);
            // dispatch(setBoard(newpushBoard));
            board[baris][kolom] =  Number(cell);
            dispatch(setBoard(board));
        }
    }, [cell])

    return (
        <View>
            {/* <Text>
            {boardEditable[baris][kolom]}
            </Text>
            <Text>
            {newpushBoard[baris][kolom]}
            </Text>
            <Text>
            {props.cell}
            </Text> */}
            {/* String(boardEditable[baris][kolom]) === '0' */}
            {props.editable ? <TextInput 
                style={[styles.boxInput, props.editable ? styles.bg1 : styles.bg2]} 
                // value={String(props.cell)} <--------------- di sini masalah
                keyboardType='number-pad'
                onChangeText={(text) => setCell(text)}
                maxLength={1}
            /> 
            : 
            <TextInput 
                style={[styles.boxInput, props.editable ? styles.bg1 : styles.bg2]} 
                value={String(props.cell)} 
                keyboardType='number-pad'
                onChangeText={(text) => setCell(text)}
                maxLength={1}
                editable={props.editable}
            />
             }
            
        </View>
    )
}