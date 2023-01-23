import { 
    LoginState,
} from "./login"
import { 
    ErrorState,
} from "./error"
import {
    TaskState,
} from './task'


export default interface StoreState {
    LoginReducer: LoginState,
    ErrorReducer: ErrorState,
    TaskReducer: TaskState,
}
