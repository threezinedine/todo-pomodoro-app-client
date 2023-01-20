import {
    ChangeLoginStateAction,
    ActionTypes,
} from './constants'


export const changeLoginState = (state: boolean): ChangeLoginStateAction => {
    return {
        type: ActionTypes.CHANGE_LOGIN_STATE,
        payload: state,
    }
}
