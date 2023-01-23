import { 
    render,
    screen,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { 
    PomodoroTimer,
} from "../components"


describe("PomodoroTimer Testing", () => {
    const currentTime = new Date(2023, 1, 1, 3, 4, 0)
    const oneMinuteLater = new Date(2023, 1, 1, 3, 5, 0)
    const fortyFiveMinutesLater = new Date(2023, 1, 1, 3, 49, 0)
    const mockOnStart = jest.fn()
    const mockOnFinised = jest.fn()
    const mockTimer = jest.fn()

    const taskData = {
        taskName: "Operating system",
        workingTimeInSeconds: 60 * 45,
        shortBreakTimeInSeconds: 60 * 10,
        longBreakTimeInSeconds: 60 * 15,
        working: true,
        shortBreak: false,
        longBreak: false,
        onStart: mockOnStart,
        onFinished: mockOnFinised,
        timer: mockTimer,
        currentTime: currentTime
    }

    let rerender: (component: React.ReactElement) => void;
        
    const renderWithTime = (time: Date): void => {
        mockTimer.mockReturnValue(currentTime)
        const newTaskData = {
            ...taskData,
            currentTime: time,
        }

        const { rerender: _rerender } = render(
            <PomodoroTimer 
                { ...newTaskData }
            />
        ) 
        rerender = _rerender
    }

    const rerenderWithTime = (time: Date): void => {
        mockTimer.mockReturnValue(currentTime)
        const newTaskData = {
            ...taskData,
            currentTime: time,
        }

        rerender(
            <PomodoroTimer 
                { ...newTaskData }
            />
        ) 
    }

    const startText = "Start"
    const stopText = "Stop"

    describe("testing in working state", () => {
        beforeEach(() => {
            renderWithTime(currentTime)
        })

        it("should contain the task's name in the Operating system's timer", () => {
            const taskNameText = screen.getByText("Operating system")
            expect(taskNameText).toBeInTheDocument()
        })

        it('should display the remain time in this interval', () => {
            const remainTime = screen.getByText("45:00")
            expect(remainTime).toBeInTheDocument()
        })

        it('should contain the start button which will convert to stop button when clicked', () => {
            const startButton = screen.getByText(startText)
            expect(screen.getByText(startText)).toBeInTheDocument()
            expect(screen.queryByText(stopText)).toBeNull()

            userEvent.click(startButton)

            expect(screen.getByText(stopText)).toBeInTheDocument()
            expect(screen.queryByText(startText)).toBeNull()
        })

        it('should call onClick with current time with when the start is clicked', () => {
            const startButton = screen.getByText(startText)

            userEvent.click(startButton)

            expect(mockOnStart).toBeCalledWith({
                startTime: currentTime
            })
        })

        it('should display other time when the 1 minitue is passed', () => {
            const startButton = screen.getByText(startText)
            userEvent.click(startButton)

            rerenderWithTime(oneMinuteLater)

            expect(screen.getByText("44:00"))
        })
    })

    describe("test the component in working state but at the time that the task has done.", () => {
        beforeEach(() => {
            renderWithTime(currentTime)
        })

        it('should convert from stop button to start text', () => {
            const startButton = screen.getByText(startText)
            userEvent.click(startButton)
            rerenderWithTime(fortyFiveMinutesLater)

            expect(screen.getByText(startText)).toBeInTheDocument()
        })

        it('should call the onFinished callback when the task has been done', () => {
            const startButton = screen.getByText(startText)
            userEvent.click(startButton)
            rerenderWithTime(fortyFiveMinutesLater)

            expect(mockOnFinised).toHaveBeenCalledWith({
                nextMode: "shortBreak"
            })
        })
    })

    describe('test the component in shortBreak state', () => {
        const newTaskData = {
            ...taskData,
            working: false,
            shortBreak: true,
        }

        beforeEach(() => {
            render(
                <PomodoroTimer 
                    { ...newTaskData }
                />
            ) 
        })

        it('should display the remain time in short break if the short break is passed', () => {
            const remainTime = screen.getByText("10:00")

            expect(remainTime).toBeInTheDocument()
        })
    })


    describe('test the component in longBreak state', () => {
        const newTaskData = {
            ...taskData,
            working: false,
            longBreak: true,
        }

        beforeEach(() => {
            render(
                <PomodoroTimer 
                    { ...newTaskData }
                />
            ) 
        })

        it('should display the remain time of the long break if the loginBreak is passed', () => {
            const remainTime = screen.getByText("15:00")

            expect(remainTime).toBeInTheDocument()
        })
    })

})
