import React from "react"
import { 
    Navigate,
} from "react-router-dom"
import { 
    connect,
} from "react-redux"
import axios from "axios"

import HomePageProps from "./HomePageProps"
import HomePageContext, {
    HomePageDataContext,
} from "./HomePageContext"
import { 
    changeLoginState,
    LoginState,
} from "../../stores/login"
import { 
    addErrorAction,
} from "../../stores/error"
import {StoreState} from "~/stores"
import {
    removeErrorAction,
} from "../../stores/error/actions"


class HomePage extends React.Component<HomePageProps, HomePageContext> {
    componentDidMount() {
        const token: string | null = localStorage.getItem("token")
        const { dispatch, loginState } = this.props

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
        const { loginState } = this.props
        
        return (
            <div>
                {
                    !loginState && (
                        <Navigate to="/login" replace={true} />
                    )
                }
            </div>
        )
    }
}


const homePageMap = (state: StoreState): HomePageDataContext => {
    return {
        loginState: state.LoginReducer.loginState
    }
}


export default connect(homePageMap)(HomePage)
