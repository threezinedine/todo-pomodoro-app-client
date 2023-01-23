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
            shortBreak = false,
        } = this.props

        let displayTime = this.convertSecondToTime(shortBreak ? shortBreakTimeInSeconds : workingTimeInSeconds)

        return (
            <div>
                <div>
                    { taskName }
                </div>
                <div>
                    { displayTime }
                </div>
            </div>
        ) 
    }
}
