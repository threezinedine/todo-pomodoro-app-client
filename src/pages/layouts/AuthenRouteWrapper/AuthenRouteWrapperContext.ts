import {
    StoreAction,
} from '../../../stores'


interface AuthenRouteWrapperContextData {
    loginState: boolean
}


export default interface AuthenRouteWrapperContext extends AuthenRouteWrapperContextData {
    dispatch: (action: StoreAction) => void
}


export type {
    AuthenRouteWrapperContextData
}
