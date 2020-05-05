import { SET_NICKNAME, SET_DIFFICULTY, SET_STATUS, GET_BOARD, SET_BOARD, VALIDATE_BOARD, SOLVE_BOARD, URL } from './types';

export function setNickname(nickname) {
    return {
        type: SET_NICKNAME,
        payload: {
            nickname
        }
    }
}

export function setDifficulty(difficulty) {
    return {
        type: SET_DIFFICULTY,
        payload: {
            difficulty
        }
    }
}

export function setStatus(status) {
    return {
        type: SET_STATUS,
        payload: {
            status: status
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
                        board: res.board,
                        boardEditable: JSON.parse(JSON.stringify(res.board))
                    }
                })
            })
    }
}

export function setBoard(board) {
    return {
        type: SET_BOARD,
        payload: {
            board: board
        }
    }
}

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

export function validateBoard(board) {
    return (dispatch) => {
        // console.log(board)
        let data = {board};
        fetch(URL + `/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodeParams(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log('theen',res.status)
                dispatch({
                    type: SET_STATUS,
                    payload: {
                        status: res.status
                    }
                })
            })
    }
}



export function solveBoard(board) {
    return (dispatch) => {
        // console.log(board)
        let data = {board:board};
        fetch(URL + `/solve`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodeParams(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log('theen solve',res)
                dispatch({
                    type: SOLVE_BOARD,
                    payload: {
                        difficulty: res.difficulty,
                        board: res.solution,
                        status: res.status,
                    }
                })
            })
    }
}