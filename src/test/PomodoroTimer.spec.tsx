import { 
    render,
    screen,
} from "@testing-library/react"

import { 
    PomodoroTimer,
} from "../components"


describe("PomodoroTimer Testing", () => {
    const taskData = {
        taskName: "Operating system",
        workingTimeInSeconds: 60 * 45,
        shortBreakTimeInSeconds: 60 * 10,
        longBreakTimeInSeconds: 60 * 15,
        working: true,
        shortBreak: false,
        longBreak: false,
    }

    describe("", () => {
        beforeEach(() => {
            render(
                <PomodoroTimer 
                    { ...taskData }
                />
            ) 
        })

        it("should contain the task's name in the Operating system's timer", () => {
            const taskNameText = screen.getByText("Operating system")

            expect(taskNameText).toBeInTheDocument()
        })

        it('should display the remain time in this interval', () => {
            const remainTime = screen.getByText("45:00")

            expect(remainTime).toBeInTheDocument()
        })
    })

    it('should display the remain time in short break if the short break is passed', () => {
        const newTaskData = {
            ...taskData,
            working: false,
            shortBreak: true,
        }

        render(
            <PomodoroTimer 
                { ...newTaskData }
            />
        ) 
        const remainTime = screen.getByText("10:00")

        expect(remainTime).toBeInTheDocument()
    })

    it('should display the remain time of the long break if the loginBreak is passed', () => {
        const newTaskData = {
            ...taskData,
            working: false,
            longBreak: true,
        }

        render(
            <PomodoroTimer 
                { ...newTaskData }
            />
        ) 

        const remainTime = screen.getByText("15:00")

        expect(remainTime).toBeInTheDocument()
    })
})
