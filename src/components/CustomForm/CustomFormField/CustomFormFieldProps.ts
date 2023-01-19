import CustomFormFieldError from "./CustomFormFieldError"


export default interface CustomFormFieldProps {
    name: string
    label: string
    errors?: CustomFormFieldError[]
    value?: string
    password?: boolean
}
