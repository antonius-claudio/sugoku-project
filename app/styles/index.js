import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const background = require('../assets/background.png');

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
        marginLeft: 3,
        marginRight: 3,
        textAlign: 'center',
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
    containerHome: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6076b1de',
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
    welcome: {
        color: '#FFFFFF',
        textShadowColor: '#FFFFFF',
        textShadowOffset: {width:2, height:2},
        textShadowRadius: 8,
        fontWeight: 'bold',
        fontSize: normalize(50),
    },
    please: {
        color: '#d9dde8', 
        fontWeight: 'bold',
        fontSize: normalize(20),
        marginBottom: 15,
    },
    inputNick: {
        backgroundColor: '#F9F9F9', 
        padding: 5, 
        textAlign: 'center', 
        color: '#627EB9', 
        fontWeight: 'bold',
        fontSize: normalize(30),
        width: '70%',
        borderRadius: 10,
        borderWidth: 1,
    },
    divPlay: {
        marginTop: 10,
        borderRadius: 10,
        width: '70%',
    },
    containerModal:{
        marginTop: '40%',
        marginBottom: '40%',
    },
    modal: {
        justifyContent: 'center',
        borderRadius: 30,
        shadowRadius: 10,
        width: Dimensions.get('window').width - 80,
        height: 280
    },
    btnGame: {
        marginLeft:10, 
        marginRight: 10
    },
    name: {
        color: '#220078', 
        fontWeight: 'bold',
        fontSize: normalize(20),
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    picker: { 
        height: 50, 
        width: 120,
        marginBottom: 20,
        color: '#e80101',
    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});