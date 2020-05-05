import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewBtn: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        flexDirection:'row'
    },
    boxInput: {
        borderWidth: 1,
        margin: 3,
    },
    bg1: {
        backgroundColor: '#fff',
    },
    bg2: {
        backgroundColor: '#D78161',
    },
    image: {
        flex: 1,
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6EECD',
        margin: '5%',
        borderRadius: 10,
    },
    shadow: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 8,
        shadowOffset: {width:0, height:4}
    },
});