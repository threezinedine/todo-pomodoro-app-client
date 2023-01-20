import React from "react"
import { 
    Navigate,
} from "react-router-dom"
import { 
    connect,
} from "react-redux"

import HomePageProps from "./HomePageProps"
import HomePageContext from "./HomePageContext"
import {
    LoginState
} from '../../stores'


class HomePage extends React.Component<HomePageProps, HomePageContext> {
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


const homePageMap = (state: LoginState): HomePageContext => {
    return {
        loginState: state.loginState
    }
}


export default connect(homePageMap)(HomePage)
