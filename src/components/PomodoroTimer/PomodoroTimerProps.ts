export default interface PomodoroTimerProps {
    taskName: string
    workingTimeInSeconds: number
    shortBreakTimeInSeconds: number
    shortBreak?: boolean
}
