import { SET_NICKNAME, SET_DIFFICULTY, GET_BOARD, SET_BOARD, VALIDATE_BOARD, SOLVE_BOARD } from '../actions/types';

const initialState = {
    nickname: '',
    board: [],
    boardEditable: [],
    difficulty: '',
    status: ''
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_NICKNAME: {
            return {...state,
                nickname : actions.payload.nickname}
        }
        case SET_DIFFICULTY: {
            return {...state, 
                difficulty : actions.payload.difficulty}
        }
        case GET_BOARD: {
            return {...state, 
                board : actions.payload.board,
                boardEditable : actions.payload.boardEditable}
        }
        case SET_BOARD: {
            return {...state, 
                board : actions.payload.board}
        }
        case VALIDATE_BOARD: {
            return {...state, 
                status: actions.payload.status}
        }
        case SOLVE_BOARD: {
            console.log('reducer solve', actions.payload.status)
            return {...state,
                difficulty : actions.payload.difficulty,
                board : actions.payload.board}
        }
        default:
            return state;
    }
}