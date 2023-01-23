interface TaskComponentData {
    taskId: number
    taskName: string 
    finished: boolean
    taskType?: string
}


export default interface TaskComponentProps extends TaskComponentData {
    onClick: () => void
}


export type {
    TaskComponentData
}
