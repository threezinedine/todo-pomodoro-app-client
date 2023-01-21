import {
    StoreAction,
} from '../../stores'


interface LoginPageDataContext {
    loginState: boolean
}


export default interface LoginPageContext extends LoginPageDataContext {
    dispatch: (action: StoreAction) => void
}


export type {
    LoginPageDataContext
}
