import React from "react"

import HeaderWrapperProps from "./HeaderWrapperProps"


export default class HeaderWrapper extends React.Component<HeaderWrapperProps> {
    render(): React.ReactNode {
        const { children } = this.props
        
        return (
            <div>
                { children }
            </div>
        )
    }
}
