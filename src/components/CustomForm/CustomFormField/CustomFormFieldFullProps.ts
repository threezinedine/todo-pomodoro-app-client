import CustomFormFieldProps from "./CustomFormFieldProps"


export default interface CustomFormFieldFullProps extends CustomFormFieldProps {
    onValueChange: (name: string, value: string) => void
}
