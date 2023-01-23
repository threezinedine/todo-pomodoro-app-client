import { 
    render,
    screen,
} from "@testing-library/react"

import { 
    PomodoroTimer,
} from "../components"


describe("PomodoroTimer Testing", () => {
    describe("", () => {
        beforeEach(() => {
            render(
                <PomodoroTimer 
                    taskName="Operating system"
                    workingTimeInSeconds={60*45}
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
        render(
            <PomodoroTimer 
                taskName="Operating system"
                workingTimeInSeconds={60*45}
                shortBreakTimeInSeconds={60*10}
                shortBreak={true}
            />
        ) 
        const remainTime = screen.getByText("10:00")

        expect(remainTime).toBeInTheDocument()
    })
})
