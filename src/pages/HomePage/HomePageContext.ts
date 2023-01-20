import {
    StoreAction,
} from '../../stores'


interface HomePageDataContext {
    loginState: boolean
}


export default interface HomePageContext extends HomePageDataContext{
    dispatch: (action: StoreAction) => void
}


export type {
    HomePageDataContext,
}
