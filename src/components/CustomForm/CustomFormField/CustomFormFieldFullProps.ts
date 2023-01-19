import CustomFormFieldProps from "./CustomFormFieldProps"


export default interface CustomFormFieldFullProps {
    field: CustomFormFieldProps
    onValueChange: (name: string, value: string) => void
}
