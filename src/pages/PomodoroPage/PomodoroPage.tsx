import React from "react"
import 'materialize-css'
import {
    Button,
} from 'react-materialize'
import { 
    connect,
} from "react-redux"
import axios from "axios"

import {
    StoreAction,
    StoreState,
} from "../../stores"
import PomodoroPageFullContext, { 
    PomodoroPageDataContext,
} from "./PomodoroPageContext"
import PomodoroPageProps from "./PomodoroPageProps"
import {
    addErrorAction,
} from "../../stores/error"


class PomodoroPage extends React.Component<PomodoroPageProps, PomodoroPageFullContext> {
    state = {
        taskId: 1,
        isWorking: false,
        dispatch: (action: StoreAction): void => {
            console.log(action)
        },
        taskName: ""
    }

    componentDidMount(): void {
        const { taskId } = this.props

        axios({
            method: 'GET',
            url: `http://localhost:8000/tasks/${taskId}` 
        })
            .then(response => {
                this.setState({
                    taskName: response.data.taskName
                }) 
            })
            .catch(err => {
                console.log(err)
            })
    }

    clickStartStopButton = (): void => {
        const { isWorking } = this.state

        this.setState({
            isWorking: !isWorking
        })
    }

    render(): React.ReactNode {
        const { isWorking, taskName } = this.state

        return (
            <div>
                PomodoroPage
                <div>45:00</div>
                <div>{ taskName }</div>
                <Button
                    onClick={this.clickStartStopButton}
                >
                    { isWorking? "Stop" : "Start" }
                </Button>
            </div>
        )
    }
}


const mapPomodoroPage = (state: StoreState): PomodoroPageDataContext => {
    return {
        taskId: state.TaskReducer.taskId 
    }
}


export default connect(mapPomodoroPage)(PomodoroPage)
