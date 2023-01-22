import React from "react"
import 'materialize-css'
import { 
    Navigate,
} from "react-router-dom"
import {
    Button,
} from 'react-materialize'

import HeaderWrapperProps from "./HeaderWrapperProps"
import { 
    TOKEN_KEY,
} from "../../../constants"


export default class HeaderWrapper extends React.Component<HeaderWrapperProps> {
    state = {
        isLoggedIn: true
    }

    setIsLoggedIn = (value: boolean): void => {
        this.setState({
            isLoggedIn: value
        })
    }

    render(): React.ReactNode {
        const { children } = this.props
        const { isLoggedIn } = this.state

        return (
            <div>
                <div>
                    <Button
                        data-testid="logout"
                        onClick={(): void => {
                            localStorage.removeItem(TOKEN_KEY)
                            this.setIsLoggedIn(false) 
                        }}
                    >
                        Logout
                    </Button>          
                </div>
                <div>
                    { children }
                </div>
                { !isLoggedIn && (<Navigate to="/login" replace={true} />) }
            </div>
        )
    }
}
