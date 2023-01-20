import reducer from "./reducer"
import { 
    ErrorAction,
} from "./constants"
import { 
    addErrorAction,
} from "./actions"
import ErrorState from "./ErrorState"


export default reducer

export {
    addErrorAction,
}

export type {
    ErrorAction,
    ErrorState,
}
