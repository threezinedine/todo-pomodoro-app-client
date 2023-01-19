import {
    CustomFormFieldProps,
} from "./CustomFormField"
import CustomFormResponseProps from "./CustomFormResponseProps"
import CustomFormSubmitErrorData from "./CustomFormSubmitErrorData"


export default interface CustomFormProps {
    fields: CustomFormFieldProps[] 
    onSubmit: (data: CustomFormResponseProps[]) => void
    onSubmitError?: (data: CustomFormSubmitErrorData) => void
}
