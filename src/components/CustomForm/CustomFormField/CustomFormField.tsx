import React from "react"

import CustomFormFieldError from "./CustomFormFieldError"
import CustomFormFieldFullProps from "./CustomFormFieldFullProps"


export default class CustomFormField extends React.Component<CustomFormFieldFullProps> {
    state = {
        errorMessage: "",
    }

    constructor(props: CustomFormFieldFullProps) {
        super(props)
    }

    validateResult = (): void => {
        const { value, errors = [] } = this.props

        console.log(errors)

        errors.forEach((error: CustomFormFieldError):void => {
            if (error.validator(value || "")) {
                this.setState({
                    errorMessage: error.message
                })
            }
        })
    }

    render(): React.ReactNode {
        const { name, label, value, password = false, onValueChange } = this.props
        const { errorMessage } = this.state
        const type = password ? "password" : "text"

        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <input 
                    id={name}
                    data-testid={name}
                    name={name}
                    value={value}
                    onChange={(evt): void => {
                        onValueChange(name, evt.target.value)
                    }}
                    onBlur={this.validateResult}
                    type={type} />
                <div>
                    { errorMessage } 
                </div>
            </div>
        )
    }
}
