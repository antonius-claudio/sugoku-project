import React from 'react';
import { View } from 'react-native';
import { Grid } from '../components';
import styles from '../styles';
import { useSelector } from 'react-redux';

export default function Line(props) {
    let boardEditable = useSelector(state => state.boardReducer.boardEditable);
    function isEdit(params) {
        return boardEditable[props.baris][params] === 0 ? true : false;
    }

    return (
        <>
            <View style={styles.line}>
                {props.line.map((cell, index) => <Grid key={index} cell={cell} baris={props.baris} kolom={index} editable={isEdit(index)}/>)}
            </View>
        </>
    )
}