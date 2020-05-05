import { GET_BOARD, CHECK_BOARD, SET_DIFFICULTY, URL, SET_BOARD } from './types';

export function setDifficulty(difficulty) {
    return {
        type: SET_DIFFICULTY,
        payload: {
            difficulty
        }
    }
}

export function getBoard() {
    return (dispatch, getState) => {
        let level = getState().boardReducer.difficulty;
        fetch(URL + `/board?difficulty=${level}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_BOARD,
                    payload: {
                        board: res.board
                    }
                })
            })
    }
}

export function setBoard(board) {
    // console.log('dari setboard', board)
    // console.log('------------')
    return {
        type: SET_BOARD,
        payload: {
            board: board
        }
    }
}

// export function setBoard(level) {
//     return (dispatch) => {
//         fetch(URL + `/board?difficulty=${level}`)
//             .then(res => res.json())
//             .then(res => {
//                 dispatch({
//                     type: GET_BOARD,
//                     payload: {
//                         board: res.board
//                     }
//                 })
//             })
//     }
// }