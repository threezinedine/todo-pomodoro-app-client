import {
    LoginAction,
} from '../../stores'


interface HomePageDataContext {
    loginState: boolean
}


export default interface HomePageContext extends HomePageDataContext{
    dispatch: (action: LoginAction) => void
}


export type {
    HomePageDataContext,
}
