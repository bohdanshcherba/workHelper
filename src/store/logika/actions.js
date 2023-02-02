import {ActionType} from './common'
import {storage} from "../../services/services";
import {customAlphabet} from 'nanoid/non-secure';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

const RECORDS = 'multi-tool-app-records'
const VALUE = 'multi-tool-app-value'
const GROUPS = 'multi-tool-app-groups'
const loadRecord = () => async dispatch => {
    let record = await storage.getItem(RECORDS)
    let value = await storage.getItem(VALUE)

    if (record === undefined || record === null) {
        record = []
        value = 0
    }

    dispatch({
        type: ActionType.LOAD_RECORDS,
        payload: {record, value}
    })
}
const saveRecords = () => (dispatch, getState) => {
    const {records, monthValue} = getState().logikaReducer
    storage.setItem(RECORDS, records)
    storage.setItem(VALUE, monthValue)
    dispatch({
        type: ActionType.SAVE_RECORDS,
        payload: records
    })
}
const deleteAllRecords = () => (dispatch) => {
    storage.setItem(RECORDS, [])
    storage.setItem(VALUE, 0)
    dispatch({
        type: ActionType.DELETE_ALL_RECORDS,
        payload: {records: [], value: 0}
    })
}
const updateValue = (value) => (dispatch, getState) => {
    const {monthValue} = getState().logikaReducer

    dispatch({
        type: ActionType.UPDATE_VALUE,
        payload: monthValue + value
    })
}
const createRecord = (record) => (dispatch) => {
    dispatch(updateValue(record.value))

    let newRecord = {
        id: nanoid(),
        name: record.name,
        date: record.date,
        amountPeoples: record.amountPeoples,
        rate: record.rate,
        value: record.value,
    }

    dispatch({
        type: ActionType.ADD_RECORD,
        payload: newRecord
    })
}
const deleteRecord = (id) => (dispatch, getState) => {
    console.log('looong')
    const {records} = getState().logikaReducer

    let i = records.findIndex(x => x.id === id)
    dispatch(updateValue(-records[i].value))
    const newRecords = records.filter((el) => el.id !== id);
    dispatch({
        type: ActionType.DELETE_RECORD,
        payload: newRecords
    })
}
const loadGroups = () => async dispatch => {
    let groups = await storage.getItem(GROUPS)

    if (groups === undefined || groups === null) {
        groups = []
    }

    dispatch({
        type: ActionType.LOAD_GROUPS,
        payload: groups
    })
}
const saveGroups = () => (dispatch, getState) => {
    const {groups} = getState().logikaReducer
    storage.setItem(GROUPS, groups)

    dispatch({
        type: ActionType.LOAD_GROUPS,
        payload: groups
    })
}
const getGroupById = (id) => (dispatch, getState) => {
    const {groups} = getState().logikaReducer
    let i = groups.findIndex(x => x.id === id)

    dispatch({
        type: ActionType.GET_GROUP,
        payload: groups[i]
    })
}
const createGroup = () => (dispatch) => {

    let newRecord = {
        id: nanoid(),
        name: 'New group',
        amountPeoples: 1,
        day: 'Неділя',
        time: '18:00',
        rate: 44,
    }

    dispatch({
        type: ActionType.CREATE_GROUP,
        payload: newRecord
    })
}
const updateGroup = (group) => (dispatch, getState) => {
    const {groups} = getState().logikaReducer
    let i = groups.findIndex(x => x.id === group.id)

    groups[i] = {
        id: groups[i].id,
        name: group.name,
        amountPeoples: group.amountPeoples,
        day: group.day,
        time: group.time,
        rate: group.rate,
    }

    dispatch({
        type: ActionType.UPDATE_GROUP,
        payload: groups
    })
}
const deleteGroup = (id) => (dispatch, getState) => {

    const {groups} = getState().logikaReducer

    const newGroups = groups.filter((el) => el.id !== id);
    dispatch({
        type: ActionType.DELETE_GROUP,
        payload: newGroups
    })
}

export {
    loadRecord,
    createRecord,
    saveRecords,
    deleteRecord,
    deleteAllRecords,
    loadGroups,
    saveGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
}
