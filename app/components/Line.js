import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid } from '../components';

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

const styles = StyleSheet.create({
    line: {
      flex: 1,
      flexDirection:'row'
    },
  });