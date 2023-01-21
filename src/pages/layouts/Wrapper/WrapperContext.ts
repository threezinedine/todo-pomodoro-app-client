import { 
    StoreAction,
} from "../../../stores"


interface WrapperContextData {
    errors: string[]
    notifications: string[]
}


export default interface WrapperContext extends WrapperContextData {
    dispatch: (action: StoreAction) => void
}


export type {
    WrapperContextData
}
