import { 
    SetCurrentTaskAction,
    TaskActionType,
} from "./constants"


export const setCurrentTask = (taskId: number): SetCurrentTaskAction => {
    return {
        type: TaskActionType.SET_CURRENT_TASK,
        payload: taskId,
    }
}
