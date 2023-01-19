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
        console.log(this.props)
        const { field, onValueChange } = this.props

        return (
            <TextInput
                data-testid={field.name}
                label={field.label}
                onChange={(evt): void => onValueChange(field.name, evt.target.value)}
            />
        )
    }
}
