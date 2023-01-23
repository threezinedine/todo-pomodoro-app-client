import reducer from "./reducer"
import { 
    ErrorAction,
} from "./constants"
import { 
    addErrorAction,
    removeErrorAction,
} from "./actions"
import ErrorState from "./ErrorState"


export default reducer

export {
    addErrorAction,
    removeErrorAction,
}

export type {
    ErrorAction,
    ErrorState,
}
