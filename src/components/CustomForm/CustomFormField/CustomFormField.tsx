import React from "react"
import 'materialize-css'
import {
    TextInput,
} from 'react-materialize'

import CustomFormFieldFullProps from "./CustomFormFieldFullProps"


export default class CustomFormField extends React.Component<CustomFormFieldFullProps> {
    constructor(props: CustomFormFieldFullProps) {
        super(props)
    }

    render(): React.ReactNode {
        const { name, label, password = false, onValueChange } = this.props

        return (
            <TextInput
                data-testid={name}
                label={label}
                password={password}
                onChange={(evt): void => onValueChange(name, evt.target.value)}
            />
        )
    }
}
