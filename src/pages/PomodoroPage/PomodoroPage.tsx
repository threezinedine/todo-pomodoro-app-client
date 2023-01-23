import React from "react"
import 'materialize-css'
import {
    Button,
} from 'react-materialize'
import { 
    connect,
} from "react-redux"

import {
    StoreAction,
    StoreState,
} from "../../stores"
import PomodoroPageFullContext, { 
    PomodoroPageDataContext,
} from "./PomodoroPageContext"

import PomodoroPageProps from "./PomodoroPageProps"


class PomodoroPage extends React.Component<PomodoroPageProps, PomodoroPageFullContext> {
    state = {
        isWorking: false,
        dispatch: (action: StoreAction): void => {
            console.log(action)
        },
    }

    clickStartStopButton = (): void => {
        const { isWorking } = this.state

        this.setState({
            isWorking: !isWorking
        })
    }

    render(): React.ReactNode {
        const { isWorking } = this.state

        return (
            <div>
                PomodoroPage
                <div>45:00</div>
                <div>Operating system</div>
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
    return {}
}


export default connect(mapPomodoroPage)(PomodoroPage)
