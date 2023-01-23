import React from "react"
import 'materialize-css'
import {
    Button,
} from 'react-materialize'

import PomodoroTimerProps from "./PomodoroTimerProps"
import PomodoroTimerContext from "./PomodoroTimerContext"


export default class PomodoroTimer extends React.Component<PomodoroTimerProps, PomodoroTimerContext> {
    state = {
        isWorking: false,
    }

    toggleWorkingState = () => {
        const { isWorking } = this.state

        this.setState({
            isWorking: !isWorking
        })
    } 

    convertSecondToTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return minutes + ":" + remainingSeconds.toString().padStart(2, '0');
    } 

    render(): React.ReactNode {
        const { 
            taskName, 
            workingTimeInSeconds,
            shortBreakTimeInSeconds,
            longBreakTimeInSeconds,
            shortBreak = false,
            working = true,
        } = this.props

        const { isWorking } = this.state

        let displayTime = 0

        if (working) {
            displayTime = workingTimeInSeconds
        } else if (shortBreak) {
            displayTime = shortBreakTimeInSeconds
        } else {
            displayTime = longBreakTimeInSeconds
        }

        const ControlButtonText = isWorking ? "Stop" : "Start"

        return (
            <div>
                <div>
                    { taskName }
                </div>
                <div>
                    { this.convertSecondToTime(displayTime) }
                </div>
                <Button
                    onClick={() => {
                        this.toggleWorkingState()
                    }}
                >
                    { ControlButtonText }
                </Button>
            </div>
        ) 
    }
}
