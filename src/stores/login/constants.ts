import { 
    Action,
} from "redux"


export enum ActionTypes {
    CHANGE_LOGIN_STATE = "Change Login State"
}


export interface ChangeLoginStateAction extends Action {
    type: ActionTypes.CHANGE_LOGIN_STATE
    payload: boolean
}


export type LoginAction = ChangeLoginStateAction
