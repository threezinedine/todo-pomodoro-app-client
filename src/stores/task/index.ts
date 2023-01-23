import reducer from "./reducer"
import TaskState from "./TaskState"
import { 
    TaskAction,
} from "./constants"
import { 
    setCurrentTask,
} from "./actions"


export default reducer


export {
    setCurrentTask,
}


export type {
    TaskState,
    TaskAction
}
