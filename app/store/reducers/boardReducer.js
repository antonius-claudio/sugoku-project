import { SET_NICKNAME, SET_DIFFICULTY, SET_STATUS, GET_BOARD, SET_BOARD, VALIDATE_BOARD, SOLVE_BOARD } from '../actions/types';

const initialState = {
    nickname: '',
    board: [],
    boardEditable: [],
    difficulty: 'unsolved',
    status: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NICKNAME: {
            return {...state,
                nickname : action.payload.nickname}
        }
        case SET_DIFFICULTY: {
            return {...state, 
                difficulty : action.payload.difficulty}
        }
        case SET_STATUS: {
            return {...state,
                status : action.payload.status}
        }
        case GET_BOARD: {
            return {...state, 
                board : action.payload.board,
                boardEditable : action.payload.boardEditable}
        }
        case SET_BOARD: {
            return {...state, 
                board : action.payload.board}
        }
        case VALIDATE_BOARD: {
            console.log('reducer validate', action.payload.status)
            return {...state,
                status: action.payload.status}
        }
        case SOLVE_BOARD: {
            console.log('reducer solve', action.payload.status)
            return {...state,
                difficulty : action.payload.difficulty,
                board : action.payload.board,
                status: action.payload.status}
        }
        default:
            return state;
    }
}