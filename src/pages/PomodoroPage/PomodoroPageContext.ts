import {
    StoreAction,
} from '../../stores'


interface PomodoroPageDataContext {

}

interface PomodoroPageContext extends PomodoroPageDataContext {
    dispatch: (action: StoreAction) => void
}

export default interface PomodoroPageFullContext extends PomodoroPageContext {
    isWorking: boolean
}


export type {
    PomodoroPageDataContext,
    PomodoroPageContext,
}
