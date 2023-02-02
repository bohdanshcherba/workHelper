import {ActionType} from './common'
import {storage} from "../../services/services";
import {customAlphabet} from 'nanoid/non-secure';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

const NOTES = 'multi-tool-app-notes'
const loadNotes = () => async dispatch => {
    let notes = await storage.getItem(NOTES)
    if(!notes){
        notes=[]
    }
    dispatch({
        type: ActionType.LOAD_NOTES,
        payload: notes
    })
}

const saveNotes = () => (dispatch, getState) => {
    const {notes} = getState().notesReducer
    storage.setItem(NOTES, notes)
    dispatch({
        type: ActionType.SAVE_NOTES,
        payload: notes
    })
}

const getNoteById = (id) => (dispatch, getState) => {
    const {notes} = getState().notesReducer
    let i = notes.findIndex(x => x.id === id)

    dispatch({
        type: ActionType.GET_NOTE,
        payload: notes[i]
    })
}
const updateNotes = (note) => (dispatch, getState) => {
    const {notes} = getState().notesReducer

    let newNotes = [...notes]
    let i = newNotes.findIndex(x => x.id === note.id)

    newNotes[i] = {
        id: note.id,
        name: note.nameNote,
        text: note.textNote
    }

    dispatch({
        type: ActionType.UPDATE_NOTE,
        payload: newNotes
    })
}

const deleteNote = (noteId) => (dispatch, getState) => {
    const {notes} = getState().notesReducer

    const newNotes = notes.filter((note) => note.id !== noteId);
    dispatch({
        type: ActionType.DELETE_NOTE,
        payload: newNotes
    })
}
const createNote = () => (dispatch) => {

    let newNote = {
        id: nanoid(),
        name: 'New Note',
        text: ""
    }


    dispatch({
        type: ActionType.ADD_NOTE,
        payload: newNote
    })
}

export {updateNotes, createNote, saveNotes, loadNotes, getNoteById, deleteNote}
