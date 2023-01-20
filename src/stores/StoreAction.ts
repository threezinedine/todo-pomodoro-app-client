import {
    LoginAction,
} from './login/constants'
import {
    ErrorAction,
} from './error/constants'


type StoreAction = LoginAction | ErrorAction


export type {
    StoreAction
}
