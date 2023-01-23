import { 
    Action,
} from "redux"


export const enum TaskActionType {
    SET_CURRENT_TASK = "Set Current Task"
}


export interface SetCurrentTaskAction extends Action {
    type: TaskActionType.SET_CURRENT_TASK
    payload: number
}


type TaskAction = SetCurrentTaskAction


export type {
    TaskAction,
}
