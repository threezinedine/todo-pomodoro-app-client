export default interface PomodoroTimerProps {
    taskName: string
    workingTimeInSeconds: number
    shortBreakTimeInSeconds: number
    longBreakTimeInSeconds: number,
    working?: boolean
    shortBreak?: boolean
    longBreak?: boolean
    timer: () => Date
    onStart: (date: { startTime: Date }) => void
    onFinished: (data: { nextMode: string }) => void
    currentTime: Date
}
