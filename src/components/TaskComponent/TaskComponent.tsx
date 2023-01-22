import React from "react"
import 'materialize-css'
import { 
    Button,
} from "react-materialize"

import TaskComponentProps from "./TaskComponentProps"


export default class TaskComponent extends React.Component<TaskComponentProps> {
    render(): React.ReactNode {
        const { 
            taskName,
            onClick,
            finished,
            taskType = "none",
        } = this.props

        return (
            <div>
                <Button
                    large
                    onClick={onClick}
                >
                    { taskName }
                </Button>
                <div>
                    { taskType }
                </div>
                <div>
                    { finished ? "Finished" : "Not finished" }
                </div>
            </div>
        ) 
    }
}
