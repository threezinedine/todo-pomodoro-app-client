import {
    createStore,
    combineReducers,
} from 'redux'

import LoginReducer, {
    LoginState,
    LoginAction,
} from './login'
import ErrorReducer, {
    ErrorAction,
    ErrorState,
} from './error'
import StoreState from './StoreState'
import { 
    StoreAction,
} from './StoreAction'


const store = createStore(combineReducers({
    LoginReducer,
    ErrorReducer,
}))


export default store
export type {
    LoginState,
    LoginAction,
    StoreState,
    StoreAction,
}
