import TaskState from "./TaskState"
import { 
    TaskAction, 
    TaskActionType,
} from "./constants"


const initialState = {
    taskId: null
}


const reducer = (state: TaskState = initialState, action:TaskAction): TaskState => {
    switch(action.type) {
    case TaskActionType.SET_CURRENT_TASK:
        return {
            ...state,
            taskId: action.payload
        }
    default:
        return state
    }
}


export default reducer
