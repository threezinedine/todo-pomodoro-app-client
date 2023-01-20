import CustomFormFieldProps from "./CustomFormFieldProps"


export default interface CustomFormFieldError {
    validator: (value: string, fields: CustomFormFieldProps[]) => boolean
    message: string
}
