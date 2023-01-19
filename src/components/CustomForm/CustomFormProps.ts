import {
    CustomFormFieldProps,
} from "./CustomFormField"


export default interface CustomFormProps {
    fields: CustomFormFieldProps[] 
    onSubmit: (data: CustomFormFieldProps[]) => void
}
