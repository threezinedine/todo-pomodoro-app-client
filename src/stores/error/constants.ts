import {
    Action,
} from 'redux'


export const enum ErrorActionType {
    ADD_ERROR = "Add error",
    REMOVE_ERROR = "Remove error",
    CLEAR_ERROR = "Clear Error"
}


export interface AddErrorAction extends Action {
    type: ErrorActionType.ADD_ERROR
    payload: string
}

export interface RemoveErrorAction extends Action {
    type: ErrorActionType.REMOVE_ERROR
}

export interface ClearErrorAction extends Action {
    type: ErrorActionType.CLEAR_ERROR
}

type ErrorAction = AddErrorAction | RemoveErrorAction

export type {
    ErrorAction
}
