import {
    LoginAction,
} from './login/constants'
import {
    ErrorAction,
} from './error/constants'
import {
    TaskAction,
} from './task/constants'


type StoreAction = LoginAction | ErrorAction | TaskAction


export type {
    StoreAction
}
