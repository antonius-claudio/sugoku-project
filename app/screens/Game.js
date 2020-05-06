import React, { useEffect, useState } from 'react';
import { Text, Button, View, ImageBackground, Picker } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, getBoard, validateBoard, solveBoard, setNickname, setStatus } from '../store/actions/boardActions';
import { Line } from '../components';
import styles, { background } from '../styles';
import LottieView from 'lottie-react-native';

export default function Game({ route, navigation }) {

    let {board, status, nickname} = useSelector(state => state.boardReducer);
    let [level, setLevel] = useState('easy');
    let [prevLevel, setPrevLevel] = useState('easy');
    let [count, setCount] = useState(0);
    let [idInterval, setIdInterval] = useState(null);
    let [sec, setSec] = useState(0);
    let [min, setMin] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        // animation.play();
        dispatch(setNickname(route.params.nickname));
        dispatch(setStatus('unsolved'));
        dispatch(setDifficulty(level));
        dispatch(getBoard());
        // timer();
    }, [])

    function timer() {
        setCount(1);
        let intervalId = setInterval(() => {
            setCount(count++);
        }, 1000);
        console.log('id yang mau dihapus', intervalId)
        setIdInterval(intervalId)
    }

    useEffect(() => {
        if (count % 60 === 0 && count > 58) {
            setMin(min+1);
        }
        // if (count <= 60) {
        //     setSec(count);
        // }
        // if (count === 60) {
        //     setCount(0)
        // }
        setSec(count%60);
    }, [count])

    // useEffect(() => {
    //     if (prevLevel !== level) {
    //         clearInterval(idInterval)
    //     }
    // }, [idInterval])

    useEffect(() => {
        dispatch(setDifficulty(level));
        dispatch(getBoard());
        clearInterval(idInterval);
        setCount(0);
        // setSec(0); tidak perlu karena sec nge watch si count
        setMin(0);
        console.log('id intervall', idInterval)
        timer();
    }, [level])

    function newBoard() {
        dispatch(getBoard());
    }

    function validate() {
        console.log('masuk validateaa')
        dispatch(validateBoard(board))
        // setTimeout(function () {
            console.log('hasil validate11111111', status)
            navigation.navigate('Finish', {
                sec,
                min
            });
        // }, 2000);

    }

    function solve() {
        console.log('masuk solvefdsfsd')
        dispatch(solveBoard(board));
        console.log('hasil solve status', status)
    }
    return(
        <>
            <ImageBackground source={background} style={styles.image}>
                <View style={[styles.container, styles.shadow]}>
                    <Text style={styles.name}>
                        Hi, {nickname}
                    </Text>
                    {/* <Text>
                        {JSON.stringify(board)}
                        </Text> */}
                    {/* 
                    <Text>
                    {JSON.stringify(boardEditable)}
                    </Text> */}
                    {/* {board.length === 0 && <Text>Wait a sec ...</Text>} */}
                    {board.length === 0 && 
                        <View style={styles.animationContainer}>
                            <LottieView
                                // ref={animation => animation = animation }
                                autoPlay={true}
                                style={{
                                width: 400,
                                height: 400,
                                backgroundColor: '#eee',
                                }}
                                source={require('../assets/9419-loading-circles.json')}
                            />
                        </View>
                    }
                    {/* {JSON.stringify(board)} */}
                    {board.length !== 0 && board.map((line, index) => <Line key={index} line={line} baris={index}/>)}
                    {board.length !== 0 && 
                        <>
                            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
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
                                <Text style={{paddingBottom: 20}}>
                                    {min < 10 ? `0${String(min)}` : String(min)}:{sec < 10 ? `0${String(sec)}` : String(sec)}
                                    {/* ----
                                    {count} */}
                                </Text>
                            </View>
                            <View style={styles.viewBtn}>
                                {/* <View style={styles.btnGame}>
                                    <Button onPress={newBoard} title='new' />
                                </View> */}
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