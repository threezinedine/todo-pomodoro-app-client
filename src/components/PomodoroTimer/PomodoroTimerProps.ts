export default interface PomodoroTimerProps {
    taskName: string
    workingTimeInSeconds: number
    shortBreakTimeInSeconds: number
    longBreakTimeInSeconds: number,
    working?: boolean
    shortBreak?: boolean
    longBreak?: boolean
}
