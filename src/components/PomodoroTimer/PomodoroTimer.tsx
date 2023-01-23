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
        startTime: new Date(2022, 1, 1, 1, 1, 0),
        remainTime: 1000,
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

    componentDidMount() {
        const { 
            workingTimeInSeconds,
            shortBreakTimeInSeconds,
            longBreakTimeInSeconds,
            working,
            shortBreak,
        } = this.props

        let displayTime = 0

        if (working) {
            displayTime = workingTimeInSeconds
        } else if (shortBreak) {
            displayTime = shortBreakTimeInSeconds
        } else {
            displayTime = longBreakTimeInSeconds
        }

        this.setState({
            remainTime: displayTime
        })
    }

    componentWillUpdate(prevProps: PomodoroTimerProps): void {
        const {
            workingTimeInSeconds,
            shortBreakTimeInSeconds,
            longBreakTimeInSeconds,
            working,
            shortBreak,
            currentTime,
            onFinished,
        } = this.props

        const { 
            startTime,
            isWorking,
        } = this.state

        if (prevProps.currentTime !== currentTime) {
            let displayTime = 0

            if (working) {
                displayTime = workingTimeInSeconds
            } else if (shortBreak) {
                displayTime = shortBreakTimeInSeconds
            } else {
                displayTime = longBreakTimeInSeconds
            }

            const remainTime: number = isWorking ? displayTime - (prevProps.currentTime.getTime() - startTime.getTime())/1000 : displayTime

            this.setState({
                remainTime: remainTime
            })

            if (remainTime === 0) {
                this.toggleWorkingState()
                onFinished({
                    nextMode: "shortBreak"
                })
            }
        }
    }

    render(): React.ReactNode {
        const { 
            taskName, 
            timer,
            onStart,
        } = this.props

        const { 
            isWorking,
            remainTime,
        } = this.state

        const ControlButtonText = isWorking ? "Stop" : "Start"

        return (
            <div>
                <div>
                    { taskName }
                </div>
                <div>
                    { this.convertSecondToTime(remainTime) }
                </div>
                <Button
                    onClick={() => {
                        this.toggleWorkingState()
                        const currentTime = timer()
                        this.setState({
                            startTime: currentTime
                        })
                        onStart({
                            startTime: currentTime
                        })
                    }}
                >
                    { ControlButtonText }
                </Button>
            </div>
        ) 
    }
}
