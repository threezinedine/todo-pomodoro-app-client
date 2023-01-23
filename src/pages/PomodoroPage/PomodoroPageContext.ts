import {
    StoreAction,
} from '../../stores'


interface PomodoroPageDataContext {
    taskId: number | null
}

interface PomodoroPageContext extends PomodoroPageDataContext {
    dispatch: (action: StoreAction) => void
}

export default interface PomodoroPageFullContext extends PomodoroPageContext {
    isWorking: boolean
    taskName: string
}


export type {
    PomodoroPageDataContext,
    PomodoroPageContext,
}
