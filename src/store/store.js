import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./root-reducer";

const reducers = combineReducers(rootReducer)

export const Store = createStore(reducers,applyMiddleware(thunk))