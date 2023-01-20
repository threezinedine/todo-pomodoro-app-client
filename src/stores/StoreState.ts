import { 
    LoginState,
} from "./login"
import { 
    ErrorState,
} from "./error"


export default interface StoreState {
    LoginReducer: LoginState,
    ErrorReducer: ErrorState,
}
