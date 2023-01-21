import { 
    AddErrorAction,
    ClearErrorAction,
    ErrorActionType,
    RemoveErrorAction,
    AddNotificationAction,
    RemoveNotificationAction,
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


export const addNotificationAction = (notification: string): AddNotificationAction => {
    return {
        type: ErrorActionType.ADD_NOTIFICATION,
        payload: notification,
    }
}


export const removeNotificationAction = (): RemoveNotificationAction => {
    return {
        type: ErrorActionType.REMOVE_NOTIFICATION
    }
}
