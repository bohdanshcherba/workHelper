import {ActionType} from './common'

const initialState = {
    records: [],
    groups: [],
    currentGroup: {},
    monthValue: 0,
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_RECORD:
            state.records.unshift(action.payload)
            return {...state, records: state.records }
        case ActionType.SAVE_RECORDS:
            return {...state, records: action.payload }
        case ActionType.DELETE_RECORD:
            return {...state, records: action.payload }
        case ActionType.DELETE_ALL_RECORDS:
            return {...state, records: action.payload.records, monthValue: action.payload.value }
        case ActionType.LOAD_RECORDS:
            return {...state, records: action.payload.record, monthValue: action.payload.value}
        case ActionType.UPDATE_VALUE:
            return {...state, monthValue: action.payload}

        case ActionType.GET_GROUP:
            return {...state, currentGroup: action.payload}
        case ActionType.CREATE_GROUP:
            return {...state, groups: [...state.groups, action.payload], currentGroup: action.payload}
        case ActionType.UPDATE_GROUP:
            return {...state, groups: action.payload}
        case ActionType.DELETE_GROUP:
            return {...state, groups: action.payload}
        case ActionType.LOAD_GROUPS:
            return {...state, groups: action.payload}
        case ActionType.SAVE_GROUPS:
            return {...state, groups: action.payload}

        default:
            return state

    }

}

