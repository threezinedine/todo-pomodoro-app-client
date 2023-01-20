import {
    createStore,
} from 'redux'

import LoginReducer, {
    LoginState,
    LoginAction,
} from './login'


const store = createStore(LoginReducer)


export default store
export type {
    LoginState,
    LoginAction,
}
