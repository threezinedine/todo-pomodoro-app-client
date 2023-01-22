export default interface TaskComponentProps {
    taskName: string 
    finished: boolean
    taskType?: string
    onClick: () => void
}
