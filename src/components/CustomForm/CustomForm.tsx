import React from "react"
import 'materialize-css'
import {
    Button,
} from 'react-materialize'

import CustomFormProps from "./CustomFormProps"
import CustomFormField, {
    CustomFormFieldProps,
} from "./CustomFormField"


export default class CustomForm extends React.Component<CustomFormProps> {
    state = {
        fields: []
    }

    constructor(props: CustomFormProps) {
        super(props)
        const { fields } = props
        const newFields = JSON.parse(JSON.stringify(fields))

        newFields.forEach((field: CustomFormFieldProps): void => {
            if (field.value === undefined) {
                field.value = ""
            }
        })

        this.state.fields = newFields
    }

    handleSubmitAction = (): void => {
        const { onSubmit } = this.props

        const { fields } = this.state

        onSubmit(fields)
    }

    onValueChange = (name: string, value: string): void => {
        const { fields } = this.state

        const newFields = JSON.parse(JSON.stringify(fields))

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
            <div>
                {
                    fields.map((field: CustomFormFieldProps, index: number): React.ReactNode => (
                        <CustomFormField 
                            field={field}
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
