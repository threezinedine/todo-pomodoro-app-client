import React from "react"
import { 
    Navigate,
} from "react-router-dom"
import { 
    connect,
} from "react-redux"
import axios from "axios"

import AuthenRouteWrapperProps from "./AuthenRouteWrapperProps"
import AuthenRouteWrapperContext, {
    AuthenRouteWrapperContextData,
} from "./AuthenRouteWrapperContext"
import {
    StoreState,
} from "../../../stores"
import { 
    changeLoginState,
} from "../../../stores/login"
import { 
    addErrorAction,
} from "../../../stores/error"
import {
    removeErrorAction,
} from "../../../stores/error/actions"



class AuthenRouteWrapper extends React.Component<AuthenRouteWrapperProps, AuthenRouteWrapperContext> {
    componentDidMount(): void {
        const token: string | null = localStorage.getItem("token")
        const { dispatch } = this.props

        if (token === null) {
            dispatch(changeLoginState(false))
        } else {
            axios({
                method: 'POST',
                url: 'http://localhost:8000/users/verified',
                data: {
                    token: token,
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        dispatch(changeLoginState(true))
                    } 
                })
                .catch(() => {
                    dispatch(addErrorAction("Token expired"))
                    dispatch(changeLoginState(false))

                    setTimeout(() => {
                        dispatch(removeErrorAction())
                    }, 1000)
                })
        }
    }
    render(): React.ReactNode {
        const { 
            onAuthComponent,
            loginState,
            offAuthRoute,
        } = this.props

        return (
            <div>
                { onAuthComponent }
                <div>
                    {
                        !loginState && (
                            <Navigate to={offAuthRoute} replace={true} />
                        )
                    } 
                </div>
            </div>
        )
    }
}


const mapAuthenWrapper = (state: StoreState): AuthenRouteWrapperContextData => {
    return {
        loginState: state.LoginReducer.loginState
    }
}


export default connect(mapAuthenWrapper)(AuthenRouteWrapper)
