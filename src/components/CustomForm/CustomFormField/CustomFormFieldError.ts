export default interface CustomFormFieldError {
    validator: (value: string) => boolean
    message: string
}
