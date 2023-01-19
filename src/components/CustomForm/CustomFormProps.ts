import {
    CustomFormFieldProps,
} from "./CustomFormField"
import CustomFormResponseProps from "./CustomFormResponseProps"


export default interface CustomFormProps {
    fields: CustomFormFieldProps[] 
    onSubmit: (data: CustomFormResponseProps[]) => void
}
