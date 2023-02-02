import {ActionType} from './common'

const initialState = {
    notes: [],
    currentNote: {},
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            return {...state, notes: [...state.notes, action.payload], currentNote: action.payload}
        case ActionType.UPDATE_NOTE:
            return {...state, notes: action.payload}
        case ActionType.LOAD_NOTES:
            return {...state, notes: action.payload}
        case ActionType.GET_NOTE:
            return {...state, currentNote: action.payload}
        case ActionType.DELETE_NOTE:
            return {...state, notes: action.payload}
        default:
            return state

    }

}

