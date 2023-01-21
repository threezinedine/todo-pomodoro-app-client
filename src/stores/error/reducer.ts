import ErrorState from "./ErrorState"
import { 
    ErrorActionType,
} from "./constants"
import { 
    StoreAction,
} from "../StoreAction"


const intialState: ErrorState = {
    notifications: [],
    errors: []
}


const reducer = (state: ErrorState = intialState, action: StoreAction): ErrorState => {
    switch(action.type) {
    case ErrorActionType.ADD_ERROR:
        return {
            ...state,
            errors: [...state.errors, action.payload]
        }
    case ErrorActionType.REMOVE_ERROR:
        return {
            ...state,
            errors: state.errors.slice(1)
        }
    case ErrorActionType.ADD_NOTIFICATION:
        return {
            ...state,
            notifications: [...state.notifications, action.payload]
        }
    case ErrorActionType.REMOVE_NOTIFICATION:
        return {
            ...state,
            notifications: state.notifications.slice(1)
        }
    default:
        return state
    }
}


export default reducer
