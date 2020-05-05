import { SET_DIFFICULTY, GET_BOARD, SET_BOARD, CHECK_BOARD } from '../actions/types';

const initialState = {
    board: [],
    difficulty: '',
    status: ''
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_DIFFICULTY: {
            return {...state, 
                difficulty : actions.payload.difficulty}
        }
        case GET_BOARD: {
            return {...state, 
                board : actions.payload.board}
        }
        case SET_BOARD: {
            return {...state, 
                board : actions.payload.board}
        }
        case CHECK_BOARD: {
            return {...state, 
                board : actions.payload.board, 
                difficulty: actions.payload.difficulty, 
                status: actions.payload.status}
        }
        default:
            return state;
    }
}