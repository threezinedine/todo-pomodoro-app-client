import {
    LoginAction,
} from '../../stores/index'


interface LoginPageDataContext {
    loginState: boolean
    message: string
}


export default interface LoginPageContext extends LoginPageDataContext {
    dispatch: (action: LoginAction) => void
}


export type {
    LoginPageDataContext
}
