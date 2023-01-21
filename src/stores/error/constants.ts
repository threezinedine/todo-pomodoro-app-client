import {
    Action,
} from 'redux'


export const enum ErrorActionType {
    ADD_ERROR = "Add error",
    REMOVE_ERROR = "Remove error",
    CLEAR_ERROR = "Clear error",
    ADD_NOTIFICATION = "Add notification",
    REMOVE_NOTIFICATION = "Remove notification",
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

export interface AddNotificationAction extends Action {
    type: ErrorActionType.ADD_NOTIFICATION
    payload: string
}

export interface RemoveNotificationAction extends Action {
    type: ErrorActionType.REMOVE_NOTIFICATION
}

type ErrorAction = AddErrorAction | RemoveErrorAction | AddNotificationAction | RemoveNotificationAction

export type {
    ErrorAction
}
