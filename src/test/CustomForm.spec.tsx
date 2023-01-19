import React from "react"
import {
    render,
    screen,
} from '@testing-library/react'
import userEvent from "@testing-library/user-event"

import { 
    CustomForm,
} from "../components"


describe("CustomForm Testing", () => {
    const mockFunc = jest.fn()
    const taskName = "taskName"

    describe("Test when normal input is created", () => {
        beforeEach(() => {
            render(
                <CustomForm 
                    fields={[
                        {
                            name: taskName,
                            label: "Task's name",
                        }
                    ]}
                    onSubmit={mockFunc}
                />
            ) 
        })

        it("should contain the task'name when it's passed to the form as an attribute.", () => {
            const taskInput = screen.getByTestId("taskName")

            expect(taskInput).toBeInTheDocument()
        })

        it("should call the onSubmit Function with return data when click on submit button", () => {
            const taskInput = screen.getByTestId("taskName")
            const submitButton = screen.getByTestId("submit")

            userEvent.type(taskInput, "threezinedine")
            userEvent.click(submitButton)

            expect(mockFunc).toHaveBeenCalledWith([{
                name: "taskName",
                label: "Task's name",
                value: "threezinedine",
            }])

        })
    })

    
    describe("test when password fields is created", () => {
        beforeEach(() => {
            render(
                <CustomForm 
                    fields={[
                        {
                            name: taskName,
                            label: "Task's name",
                            value: "",
                            password: true,
                        }
                    ]}
                    onSubmit={mockFunc}
                />
            ) 
        })

        it('should have the type password if the password attribute is set to true', () => {
            const taskInput = screen.getByTestId("taskName")  

            expect(taskInput).toHaveAttribute("type", "password")
        })
    })

})
