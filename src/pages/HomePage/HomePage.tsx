import React from "react"
import { 
    Navigate,
} from "react-router-dom"
import { 
    connect,
} from "react-redux"

import HomePageProps from "./HomePageProps"
import HomePageContext, {
    HomePageDataContext,
} from "./HomePageContext"
import {
    LoginState,
} from '../../stores'
import { 
    changeLoginState,
} from "../../stores/login"


class HomePage extends React.Component<HomePageProps, HomePageContext> {
    componentDidMount() {
        const token: string | null = localStorage.getItem("token")
        const { dispatch } = this.props

        if (token === null) {
            dispatch(changeLoginState(false))
        } else {
            dispatch(changeLoginState(true))
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


const homePageMap = (state: LoginState): HomePageDataContext => {
    return {
        loginState: state.loginState
    }
}


export default connect(homePageMap)(HomePage)
