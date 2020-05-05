import React from 'react';
import { View } from 'react-native';
import { Grid } from '../components';
import styles from '../styles';

export default function Line(props) {

    function isEdit(params) {
        return params === 0 ? true : false;
    }

    return (
        <>
            <View style={styles.line}>
                {props.line.map((cell, index) => <Grid key={index} cell={cell} baris={props.baris} kolom={index} editable={isEdit(cell)}/>)}
            </View>
        </>
    )
}