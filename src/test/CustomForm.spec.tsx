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
    const mockOnSubmitErrorFunc = jest.fn()
    const taskName = "taskName"
    const taskValid = "taskValid"
    const taskLabel = "Task's name"
    const taskValidLabel = "Task's Name Valid"
    const submitButtonTestId= "submit"
    const testTaskName = "threezinedine"
    const testWrongName = "threezine"
    const testTaskNameWithLessThanFourCharacters = "thre"
    const valueIsLessThanFourCharactersErrorString = "The value has less than 4 characters."
    const valueDoesNotMatchErrorString = "Value does not match."

    describe("Test when normal input is created", () => {
        beforeEach(() => {
            render(
                <CustomForm 
                    fields={[
                        {
                            name: taskName,
                            label: taskLabel,
                            errors: [{
                                validator: (value: string): boolean => (value.length <= 4),
                                message: valueIsLessThanFourCharactersErrorString,
                            }],
                        }
                    ]}
                    onSubmit={mockFunc}
                    onSubmitError={mockOnSubmitErrorFunc}
                />
            ) 
        })

        it("should contain the task'name when it's passed to the form as an attribute.", () => {
            const taskInput = screen.getByTestId(taskName)

            expect(taskInput).toBeInTheDocument()
        })

        it("should call the onSubmit Function with return data when click on submit button", () => {
            const taskInput = screen.getByTestId(taskName)
            const submitButton = screen.getByTestId(submitButtonTestId)

            userEvent.type(taskInput, testTaskName)
            userEvent.click(submitButton)

            expect(mockFunc).toHaveBeenCalledWith([{
                name: taskName,
                value: testTaskName,
            }])

        })

        it('should have the error message when the validator returns true', () => {
            const taskInput = screen.getByTestId(taskName)

            userEvent.type(taskInput, testTaskNameWithLessThanFourCharacters)
            userEvent.tab()

            const errorMessage = screen.getByText(valueIsLessThanFourCharactersErrorString)

            expect(errorMessage).toBeInTheDocument()
        })

        it('should have the error message after the bluring but disappear after focus again', () => {
            const taskInput = screen.getByTestId(taskName)

            userEvent.type(taskInput, "thr")
            userEvent.tab()

            userEvent.type(taskInput, "eezinedine")
            userEvent.tab()

            const errorMessage = screen.queryByText(valueIsLessThanFourCharactersErrorString)

            expect(errorMessage).toBeNull()
        })

        it('should call the onSubmitError function when there is the error in the form', () => {
            const taskInput = screen.getByTestId(taskName)
            const submitButton = screen.getByTestId(submitButtonTestId)

            userEvent.type(taskInput, "thr")
            userEvent.tab()

            userEvent.click(submitButton)

            expect(mockOnSubmitErrorFunc).toHaveBeenCalledWith({
                success: [],
                error: [valueIsLessThanFourCharactersErrorString],
            })
        })
    })

    
    describe("test when password fields is created", () => {
        beforeEach(() => {
            render(
                <CustomForm 
                    fields={[
                        {
                            name: taskName,
                            label: taskLabel,
                            value: "",
                            password: true,
                            errors: [],
                        }
                    ]}
                    onSubmit={mockFunc}
                />
            ) 
        })

        it('should have the type password if the password attribute is set to true', () => {
            const taskInput = screen.getByTestId(taskName)  

            expect(taskInput).toHaveAttribute("type", "password")
        })
    })

    describe("test two value must match", () => {
        beforeEach(() => {
            render(
                <CustomForm 
                    fields={[
                        {
                            name: taskName,
                            label: taskLabel,
                            value: "",
                            password: true,
                            errors: [],
                        },
                        {
                            name: taskValid,
                            label: taskValidLabel,
                            value: "",
                            password: true,
                            errors: [
                                {
                                    message: valueDoesNotMatchErrorString,
                                    validator: (value, fields): boolean => {
                                        let result = false 

                                        fields.forEach((fields): void => {
                                            if (fields.name === taskName) {
                                                result = fields.value !== value 
                                            }
                                        })

                                        return result
                                    }
                                }
                            ],
                        }
                    ]}
                    onSubmit={mockFunc}
                    onSubmitError={mockOnSubmitErrorFunc}
                />
            ) 
        })

        it('can be submitted when 2 fields have the same value', () => {
            const taskInput = screen.getByTestId(taskName)
            const taskInputValid = screen.getByTestId(taskValid)
            const submitButton = screen.getByTestId(submitButtonTestId)

            userEvent.type(taskInput, testTaskName)
            userEvent.type(taskInputValid, testTaskName)

            userEvent.click(submitButton)

            expect(mockFunc).toHaveBeenCalled()
        })

        it('cannot be submitted when 2 fields do not have the same value', () => {
            const taskInput = screen.getByTestId(taskName)
            const taskInputValid = screen.getByTestId(taskValid)
            const submitButton = screen.getByTestId(submitButtonTestId)

            userEvent.type(taskInput, testTaskName)
            userEvent.type(taskInputValid, testWrongName)

            userEvent.click(submitButton)

            expect(mockOnSubmitErrorFunc).toHaveBeenCalledWith({
                success: [],
                error: [
                    valueDoesNotMatchErrorString,
                ]
            })
        })
    })

})
