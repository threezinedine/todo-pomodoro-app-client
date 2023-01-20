import { 
    AddErrorAction,
    ClearErrorAction,
    ErrorActionType,
    RemoveErrorAction,
} from "./constants"

export const addErrorAction = (error: string): AddErrorAction => {
    return {
        type: ErrorActionType.ADD_ERROR,
        payload: error,
    }
}


export const removeErrorAction = (): RemoveErrorAction => {
    return {
        type: ErrorActionType.REMOVE_ERROR
    }
}


export const clearErrorAction = (): ClearErrorAction => {
    return {
        type: ErrorActionType.CLEAR_ERROR
    }
}
