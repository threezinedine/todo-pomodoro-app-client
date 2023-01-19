import React from "react"
import 'materialize-css'
import {
    Button,
} from 'react-materialize'

import CustomFormProps from "./CustomFormProps"
import CustomFormResponseProps from "./CustomFormResponseProps"
import CustomFormField, {
    CustomFormFieldProps,
} from "./CustomFormField"
import styles from './CustomForm.module.scss'
import CustomFormState from "./CustomFormState"
import CustomFormSubmitErrorData from "./CustomFormSubmitErrorData"
import CustomFormFieldError from "./CustomFormField/CustomFormFieldError"


export default class CustomForm extends React.Component<CustomFormProps, CustomFormState> {
    constructor(props: CustomFormProps) {
        super(props)
        const { fields } = props
        const newFields: CustomFormFieldProps[] = [
            ...fields,
        ]

        newFields.forEach((field: CustomFormFieldProps): void => {
            if (field.value === undefined) {
                field.value = ""
            }
        })

        this.state = {
            fields: newFields
        }
    }

    handleSubmitAction = (): void => {
        const { 
            onSubmit, 
            onSubmitError = (data):void => {
                console.log(data)
            } } = this.props

        const { fields } = this.state

        const responseFields = fields.reduce((prev: CustomFormResponseProps[], curr: CustomFormFieldProps) => {
            prev.push({
                name: curr.name,
                value: curr.value || "",
            })

            return prev 
        }, [])

        const errors: CustomFormSubmitErrorData = fields.reduce((prev: CustomFormSubmitErrorData, curr: CustomFormFieldProps) => {
            const { value = "", errors = [] } = curr 
            errors.forEach((error: CustomFormFieldError) => {
                if (error.validator(value)) {
                    prev.error.push(error.message)
                }
            })
            return prev
        }, {
            success: [],
            error: [],
        })

        if (errors.error.length !== 0) {
            onSubmitError(errors)
        } else {
            onSubmit(responseFields)
        }
    }

    onValueChange = (name: string, value: string): void => {
        const { fields } = this.state

        const newFields: CustomFormFieldProps[] = [
            ...fields
        ]

        newFields.forEach((field: CustomFormFieldProps): void => {
            if (field.name === name) {
                field.value = value
            }
        })

        this.setState({
            fields: newFields
        })

    }

    render() : React.ReactNode {
        const { fields } = this.state

        return (
            <div className={styles.wrapper}>
                {
                    fields.map((field: CustomFormFieldProps, index: number): React.ReactNode => (
                        <CustomFormField 
                            {...field}
                            onValueChange={this.onValueChange}
                            key={index}
                        />
                    ))
                }
                <Button 
                    data-testid="submit"
                    onClick={this.handleSubmitAction}
                >
                    Submit
                </Button>
            </div>
        )
    }
}
