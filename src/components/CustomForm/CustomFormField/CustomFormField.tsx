import React from "react"

import CustomFormFieldError from "./CustomFormFieldError"
import CustomFormFieldFullProps from "./CustomFormFieldFullProps"
import styles from './CustomFormField.module.scss'


export default class CustomFormField extends React.Component<CustomFormFieldFullProps> {
    state = {
        errorMessage: "",
    }

    constructor(props: CustomFormFieldFullProps) {
        super(props)
    }

    onFocus = (): void => {
        this.setState({
            errorMessage: ""
        })
    }

    validateResult = (): void => {
        const { fields, value, errors = [] } = this.props

        errors.forEach((error: CustomFormFieldError):void => {
            if (error.validator(value || "", fields)) {
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
            <div className={styles.wrapper}>
                <label htmlFor={name}>{label}</label>
                <input 
                    id={name}
                    data-testid={name}
                    name={name}
                    value={value}
                    onFocus={this.onFocus}
                    onChange={(evt): void => {
                        onValueChange(name, evt.target.value)
                    }}
                    onBlur={this.validateResult}
                    type={type} />
                <div className={errorMessage !== "" ? styles.error : ""}>
                    { errorMessage } 
                </div>
            </div>
        )
    }
}
