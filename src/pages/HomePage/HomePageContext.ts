import {
    StoreAction,
} from '../../stores'
import {
    TaskComponentData
} from '../../components'


interface HomePageDataContext {
    loginState: boolean
}


interface HomePageContext extends HomePageDataContext {
    dispatch: (action: StoreAction) => void
}


export default interface HomePageFullContext extends HomePageContext {
    tasks: TaskComponentData[]
    isNavigate: boolean
}


export type {
    HomePageDataContext,
    HomePageContext,
}
