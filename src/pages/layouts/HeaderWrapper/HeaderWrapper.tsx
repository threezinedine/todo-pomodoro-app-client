import React  from "react"
import 'materialize-css'
import { 
    Navigate, 
    useNavigate,
} from "react-router-dom"
import {
    Button,
} from 'react-materialize'

import HeaderWrapperProps from "./HeaderWrapperProps"
import HeaderWrapperContext from "./HeaderWrapperContext"
import { 
    TOKEN_KEY,
} from "../../../constants"


class HeaderWrapper extends React.Component<HeaderWrapperProps, HeaderWrapperContext> {
    static displayName = "HeaderWrapper"

    render(): React.ReactNode {
        const { 
            children, 
            navigate = () => {
                console.log("Nothing")
            },
        } = this.props

        return (
            <div>
                <div 
                    data-testid="header"
                >
                    <Button
                        data-testid="brand"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        Brand
                    </Button>
                    <Button
                        data-testid="logout"
                        onClick={(): void => {
                            localStorage.removeItem(TOKEN_KEY)
                            navigate("/login")
                        }}
                    >
                        Logout
                    </Button>          
                </div>
                <div>
                    <div 
                        data-testid="sidebar">
                        Sidebar
                    </div>
                    <div>
                        { children }
                    </div>
                </div>
            </div>
        )
    }
}

function renderHeaderWrapper(props: HeaderWrapperProps): React.ReactElement {
    return <HeaderWrapper navigate={useNavigate()} { ...props }/>
}

const withNavigation = () => {
    return renderHeaderWrapper
}


export default withNavigation()
