import { 
    render,
    screen,
} from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import {
    TaskComponent,
} from "../components"


describe('the Task Component test', () => {
    const mockOnClickFunc = jest.fn()
    const taskName = "Operating system"
    const finishedStatus = "Finished"
    const notFinishedStatus = "Not finished"

    describe("When the task component is finished", () => {
        beforeEach(() => {
            render(
                <TaskComponent 
                    taskId={1}
                    taskName={taskName}
                    onClick={mockOnClickFunc}
                    taskType="core"
                    finished={true}
                />)
        })

        it('should display the component name when the task component is rendered', () => {
            const taskNameComponent = screen.getByText(taskName)

            expect(taskNameComponent).toBeInTheDocument()
        })

        it('should display the modal when click on this task', () => {
            const taskNameComponent = screen.getByText(taskName)

            userEvent.click(taskNameComponent)

            expect(mockOnClickFunc).toHaveBeenCalled()
        })

        it('should display the current status (finished or not)', () => {
            const taskStatus = screen.getByText(finishedStatus)

            expect(taskStatus).toBeInTheDocument()
        })

        it("should display the task's type", () => {
            const taskType = screen.getByText("core")

            expect(taskType).toBeInTheDocument()
        })
    })

    describe("When the task component is not finished", () => {
        beforeEach(() => {
            render(
                <TaskComponent 
                    taskId={1}
                    taskName={taskName}
                    onClick={mockOnClickFunc}
                    finished={false}
                />)
        })

        it('should display the current status (finished or not)', () => {
            const taskStatus = screen.getByText(notFinishedStatus)

            expect(taskStatus).toBeInTheDocument()
        })

        it("should dipslay none task's type when the taskType is not passed.", () => {
            const taskType = screen.getByText("none")

            expect(taskType).toBeInTheDocument()
        })
    })
})
