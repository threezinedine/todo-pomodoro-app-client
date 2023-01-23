import React from "react"

import PomodoroTimerProps from "./PomodoroTimerProps"


export default class PomodoroTimer extends React.Component<PomodoroTimerProps> {
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

        let displayTime = 0

        if (working) {
            displayTime = workingTimeInSeconds
        } else if (shortBreak) {
            displayTime = shortBreakTimeInSeconds
        } else {
            displayTime = longBreakTimeInSeconds
        }

        return (
            <div>
                <div>
                    { taskName }
                </div>
                <div>
                    { this.convertSecondToTime(displayTime) }
                </div>
            </div>
        ) 
    }
}
