import {
    createStore,
    combineReducers,
} from 'redux'

import LoginReducer from './login'
import ErrorReducer from './error'
import TaskReducer from './task'
import StoreState from './StoreState'
import { 
    StoreAction,
} from './StoreAction'


const store = createStore(combineReducers({
    LoginReducer,
    ErrorReducer,
    TaskReducer,
}))


export default store
export type {
    StoreState,
    StoreAction,
}
