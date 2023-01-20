import LoginState from "./LoginState"

import {
    ActionTypes,
    LoginAction,
} from './constants'


const initialState: LoginState = {
    loginState: false,
}


const reducer = (state: LoginState = initialState, action: LoginAction) => { 
    switch(action.type) 
    { 
    case ActionTypes.CHANGE_LOGIN_STATE:
        return {
            ...state, 
            loginState: action.payload
        }
    default:
        return state
    }
}


export default reducer
